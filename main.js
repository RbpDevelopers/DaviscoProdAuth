
class PresenceIndicator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    height: 100vh;
                    font-family: sans-serif;
                }
                .status {
                    padding: 20px;
                    border-radius: 12px;
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }
                .status.online {
                    background-color: #28a745;
                }
                .status.offline {
                    background-color: #6c757d;
                }
                .status.connecting {
                    background-color: #ffc107;
                    animation: pulse 1.5s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            </style>
            <div class="status connecting">Connecting...</div>
        `;
    }

    connectedCallback() {
        this.statusEl = this.shadowRoot.querySelector('.status');
        this.initFirebase();
    }

    initFirebase() {
        const db = firebase.database();
        const con = db.ref('.info/connected');
        const presenceRef = db.ref('presence/user');

        con.on('value', (snap) => {
            if (snap.val() === true) {
                this.setStatus('online');
                presenceRef.onDisconnect().set('offline');
                presenceRef.set('online');
            } else {
                this.setStatus('offline');
            }
        });
    }

    setStatus(status) {
        this.statusEl.className = `status ${status}`;
        this.statusEl.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    }
}

customElements.define('presence-indicator', PresenceIndicator);
