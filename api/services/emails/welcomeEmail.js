const axios = require("axios");

const API_TOKEN = "re_fGQif6KB_DnGaNJKqac2aX2Dv7g6wM6JM";
const FROM_EMAIL = "Petzia <noreply@petziapp.com>";

async function sendWelcomeEmail(email, nome = "Tutor(a)", senhaTemporaria = "senha123") {
  const html = `
    <div style="font-family: Inter, sans-serif; color: #1C1C1C; padding: 20px;">
      <img src="https://liderfacilitador.com.br/wp-content/uploads/2025/04/Logotipo-versao-Horizontal-com-slogan.png" width="200" alt="Logo Petzia" />
      <h1 style="color: #3A86FF;">Bem-vindo à Petzia! 💙</h1>
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Seu acesso foi ativado com sucesso. Aqui estão seus dados:</p>

      <div style="background-color: #E6F4F1; padding: 12px 18px; border-radius: 8px; margin: 16px 0;">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Senha temporária:</strong> ${senhaTemporaria}</p>
        <p><strong>App:</strong> <a href="https://app.petziapp.com" target="_blank">https://app.petziapp.com</a></p>
      </div>

      <h2 style="color: #9B5DE5;">📲 Como instalar o app Petzia</h2>
      <p><strong>Petzia é um app progressivo (PWA)</strong>, ou seja, não precisa baixar pela loja de apps:</p>

      <h3 style="margin-top: 24px;">📱 Para Android (Google Chrome)</h3>
      <ol style="padding-left: 20px;">
        <li>Acesse: <a href="https://app.petziapp.com">https://app.petziapp.com</a></li>
        <li>Toque nos 3 pontinhos no canto superior direito<br>
          <img src="https://petziapp.com/wp-content/uploads/2025/05/petziapp_thankyou-android_1.jpeg" alt="Passo 1 Android" style="max-width: 100%; border-radius: 8px; margin-top: 8px;" />
        </li>
        <li>Escolha <strong>“Adicionar à tela inicial”</strong><br>
          <img src="https://petziapp.com/wp-content/uploads/2025/05/petziapp_thankyou-android_2.jpeg" alt="Passo 2 Android" style="max-width: 100%; border-radius: 8px; margin-top: 8px;" />
        </li>
        <li>Confirme clicando em <strong>“Instalar”</strong><br>
          <img src="https://petziapp.com/wp-content/uploads/2025/05/petziapp_thankyou-android_3.jpeg" alt="Passo 3 Android" style="max-width: 100%; border-radius: 8px; margin-top: 8px;" />
        </li>
      </ol>

      <h3 style="margin-top: 24px;">🍏 Para iPhone (Safari)</h3>
      <ol style="padding-left: 20px;">
        <li>Acesse: <a href="https://app.petziapp.com">https://app.petziapp.com</a> no Safari</li>
        <li>Toque no ícone de compartilhar (quadrado com seta para cima)<br>
          <img src="https://petziapp.com/wp-content/uploads/2025/05/petziapp_thankyou-iphone_1.jpeg" alt="Passo 1 iPhone" style="max-width: 100%; border-radius: 8px; margin-top: 8px;" />
        </li>
        <li>Toque em <strong>“Adicionar à Tela de Início”</strong><br>
          <img src="https://petziapp.com/wp-content/uploads/2025/05/petziapp_thankyou-iphone_2.jpeg" alt="Passo 2 iPhone" style="max-width: 100%; border-radius: 8px; margin-top: 8px;" />
        </li>
        <li>Confirme clicando em <strong>“Instalar”</strong><br>
          <img src="https://petziapp.com/wp-content/uploads/2025/05/petziapp_thankyou-iphone_3.jpeg" alt="Passo 3 iPhone" style="max-width: 100%; border-radius: 8px; margin-top: 8px;" />
        </li>
      </ol>

      <div style="text-align: center; margin: 24px 0;">
        <a href="https://app.petziapp.com"
           target="_blank"
           style="display: inline-block; background-color: #2EC4B6; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
          🚀 Acessar o App Petzia
        </a>
      </div>

      <p style="margin-top: 24px;">Recomendamos que você altere sua senha após o primeiro acesso.</p>
      <p style="color: #999;">Equipe Petzia 🐶</p>
    </div>
  `;

  try {
    const response = await axios.post('https://api.resend.com/emails', {
      from: FROM_EMAIL,
      to: [email],
      subject: '🎉 Seu acesso ao Petzia está liberado!',
      html
    }, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("✅ Welcome e-mail enviado com sucesso!", response.status);
  } catch (err) {
    console.error("❌ Erro ao enviar Welcome e-mail:", err.response?.data || err.message);
  }
}

module.exports = sendWelcomeEmail;
