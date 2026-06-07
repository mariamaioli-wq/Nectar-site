import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nome, empresa, email, telefone, descricao } = await request.json();

  await resend.emails.send({
    from: "nectar site <onboarding@resend.dev>",
    to: "Maioli@nectareventos.com.br",
    subject: `Nova mensagem de ${nome} — ${empresa}`,
    html: `
      <h2>Nova mensagem pelo site</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Empresa:</strong> ${empresa}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone || "não informado"}</p>
      <hr/>
      <p><strong>Mensagem:</strong></p>
      <p>${descricao}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
