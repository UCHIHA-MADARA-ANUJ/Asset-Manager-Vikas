/**
 * Vercel serverless entry point.
 * Exports the Express app directly — @vercel/node wraps it as a serverless handler.
 * The traditional server entry (src/index.ts) is used for non-serverless deployments.
 */
import app from "../src/app.js";

export default app;
