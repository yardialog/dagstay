import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(6, "Укажите телефон"),
  telegram: z.string().optional().nullable(),
  objectType: z.string().optional().nullable(),
  roomsCount: z.string().optional().nullable(),
  source: z.string().default("final"),
  avgPrice: z.number().optional().nullable(),
  bookings: z.number().optional().nullable(),
  aggregatorShare: z.number().optional().nullable(),
  monthlyLoss: z.number().optional().nullable(),
  comment: z.string().optional().nullable(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "validation",
          issues: parsed.error.issues.map((i) => ({
            path: i.path.join("."),
            message: i.message,
          })),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const lead = await db.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        telegram: data.telegram ?? null,
        objectType: data.objectType ?? null,
        roomsCount: data.roomsCount ?? null,
        source: data.source,
        avgPrice: data.avgPrice ?? null,
        bookings: data.bookings ?? null,
        aggregatorShare: data.aggregatorShare ?? null,
        monthlyLoss: data.monthlyLoss ?? null,
        comment: data.comment ?? null,
      },
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (e) {
    const message = e instanceof Error ? e.message : "unknown";
    return NextResponse.json(
      { ok: false, error: "server", message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const total = await db.lead.count();
    const newLeads = await db.lead.count({ where: { status: "new" } });
    return NextResponse.json({ ok: true, total, new: newLeads });
  } catch (e) {
    const message = e instanceof Error ? e.message : "unknown";
    return NextResponse.json(
      { ok: false, error: "server", message },
      { status: 500 }
    );
  }
}
