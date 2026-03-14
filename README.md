# GENAI GENESIS

This project (Sentinel) is a demo-first fraud analyst console for hackathon judging. It combines analyst case review with a live fraud-monitoring dashboard, fusing transaction anomaly, behavioral identity mismatch, and network intelligence to flag suspicious transfers in real time.

## Stack

- Frontend: Next.js, TypeScript, Tailwind, Cytoscape.js, Recharts
- Backend: FastAPI, Python, pandas, scikit-learn, networkx
- AI: Gemini API for explanations only

## Project Layout

```text
sentinel/
├── backend/
├── frontend/
└── data/
    ├── demo_cases.json
    ├── sentinel_clean_transactions.csv
    └── synthetic_sessions.json
```

## What The App Includes

- Main analyst dashboard for deterministic demo cases
- Detailed case views with behavior and network risk explanations
- Graph investigation view for suspicious recipient paths
- Live monitor at `/live` with streaming synthetic transactions, rule scoring, anomaly scoring, and ring detection

## Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs on `http://127.0.0.1:8000`.

Useful backend routes:

- `GET /api/health`
- `GET /api/dashboard/summary`
- `GET /api/live/bootstrap`
- `GET /api/live/stream`

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://127.0.0.1:3000`.

Main app pages:

- Dashboard: `http://127.0.0.1:3000`
- Live monitor: `http://127.0.0.1:3000/live`
- Example case: `http://127.0.0.1:3000/cases/tx_blocked_001`
- Example graph: `http://127.0.0.1:3000/cases/tx_blocked_001/graph`

## Gemini

Gemini is optional for local development. If `GEMINI_API_KEY` is not set, Sentinel falls back to deterministic explanations.

```bash
export GEMINI_API_KEY=your_key_here
export GEMINI_MODEL=gemini-2.0-flash
```

## Demo Cases

- `normal_case`: approved, trusted recipient, low behavior drift
- `review_case`: moderate behavior drift and one-hop exposure to suspicious network
- `blocked_case`: strong behavior mismatch and direct mule-cluster exposure
