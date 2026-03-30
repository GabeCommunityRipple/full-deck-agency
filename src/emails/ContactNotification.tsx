import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Row,
  Column,
} from "@react-email/components";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest?: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  phone,
  company,
  service_interest,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f9fafb", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
          <Section style={{ backgroundColor: "#1a365d", padding: "24px", borderRadius: "8px 8px 0 0" }}>
            <Heading style={{ color: "#ffffff", margin: 0, fontSize: "24px" }}>
              New Lead — Full Deck Agency
            </Heading>
          </Section>
          <Section style={{ backgroundColor: "#ffffff", padding: "32px", borderRadius: "0 0 8px 8px", border: "1px solid #e5e7eb" }}>
            <Row>
              <Column>
                <Text style={{ fontWeight: "bold", marginBottom: "4px" }}>Name</Text>
                <Text style={{ color: "#374151", marginTop: 0 }}>{name}</Text>
              </Column>
              <Column>
                <Text style={{ fontWeight: "bold", marginBottom: "4px" }}>Email</Text>
                <Text style={{ color: "#374151", marginTop: 0 }}>{email}</Text>
              </Column>
            </Row>
            {phone && (
              <Row>
                <Column>
                  <Text style={{ fontWeight: "bold", marginBottom: "4px" }}>Phone</Text>
                  <Text style={{ color: "#374151", marginTop: 0 }}>{phone}</Text>
                </Column>
                <Column>
                  <Text style={{ fontWeight: "bold", marginBottom: "4px" }}>Company</Text>
                  <Text style={{ color: "#374151", marginTop: 0 }}>{company || "—"}</Text>
                </Column>
              </Row>
            )}
            {service_interest && (
              <>
                <Text style={{ fontWeight: "bold", marginBottom: "4px" }}>Service Interest</Text>
                <Text style={{ color: "#374151", marginTop: 0 }}>{service_interest}</Text>
              </>
            )}
            <Text style={{ fontWeight: "bold", marginBottom: "4px" }}>Message</Text>
            <Text style={{ color: "#374151", backgroundColor: "#f9fafb", padding: "16px", borderRadius: "6px", marginTop: 0 }}>
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
