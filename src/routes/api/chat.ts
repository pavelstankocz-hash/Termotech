import { createFileRoute } from "@tanstack/react-router";
import { generateText } from "ai";

import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM = `You are the online assistant of Thermotech GROUPE s.r.o. (www.thermotech.cz), a Czech manufacturer since 1972.

Company facts you may use:
- Products: thermal protection (thermal fuses, bimetal thermostats, temperature sensors PTC, NTC, PT100, PT1000, current protectors), adjustable thermostats (REGO brand: capillary, rod, OEM solutions), wire harness assembly (custom harnesses, crimped terminals, braided sleeving, 100% electrical testing), complex applications (room thermostats, dimmers, appliance controls, machine and mechanical parts, assemblies).
- Industries: white appliances, electric motors, power supplies, heating systems, HVAC & ventilation, transformers, automotive, medical equipment.
- History: founded 1972, REGO thermostats made in Czech Republic, sensor production started 2018, new production plant planned for 2026.
- Registered office: Varsavska 715, 120 00 Prague, Czech Republic. IC 05336945, DIC CZ05336945.
- Production plant: Husova 368, 549 54, Czech Republic.
- Phone +42 (0) 491 511 450, e-mail info@thermotech.cz.

Rules:
- Answer briefly (max 5 sentences), professionally, in the SAME language as the user's last message.
- Never invent prices, delivery times, datasheets, certificates or technical parameters you were not given.
- If you do not know the answer, or the customer asks for a quotation, custom design or specific technical data, say so and direct them to the contact form at /contact or e-mail info@thermotech.cz.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { messages?: ChatMessage[] };
          const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
          if (messages.length === 0) {
            return Response.json({ error: "No messages" }, { status: 400 });
          }

          const key = process.env.LOVABLE_API_KEY;
          if (!key) return Response.json({ error: "Missing LOVABLE_API_KEY" }, { status: 500 });

          const gateway = createLovableAiGatewayProvider(key);
          const result = await generateText({
            model: gateway("google/gemini-3.6-flash"),
            instructions: SYSTEM,
            messages: [
              ...messages.map((m) => ({
                role: m.role,
                content: String(m.content ?? "").slice(0, 2000),
              })),
            ],
          });

          return Response.json({ text: result.text });
        } catch (error) {
          console.error(error);
          const status =
            typeof error === "object" && error && "statusCode" in error
              ? Number((error as { statusCode: unknown }).statusCode) || 500
              : 500;
          return Response.json({ error: "AI request failed"}, { status });
        }
      },
    },
  },
});
