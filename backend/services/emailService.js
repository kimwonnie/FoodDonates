class EmailService {

  async sendEmail({
    to,
    subject,
    html
  }) {

    try {

      console.log("Email enviado");

      console.log({
        to,
        subject
      });

      return true;

    } catch (error) {

      console.error(error);

      return false;

    }

  }

}

export default new EmailService();