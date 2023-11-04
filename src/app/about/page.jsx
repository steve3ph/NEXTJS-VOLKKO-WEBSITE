import ContactSection from '@/components/ContactSection'
import Container from '@/components/Container'
import Cultures from '@/components/Cultures '
import PageIntro from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'


const AboutPage = () => {
  return (
    <>
    <PageIntro
    eyebrow="About Us"
    title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Volkkommen Industries specializes in IoT solutions for diverse environments. Our custom devices empower data acquisition, unlocking valuable insights. We embrace the idea that 'anything can be measured,' driving innovation. Our solutions seamlessly integrate with existing technology, providing more with less. The transformative data we provide is reshaping the way our clients operate.
          </p>
          <p>
          Our edge computing detects anomalies to safeguard critical assets, and our end-to-end IoT solutions empower real-time business insights. We optimize energy use, enhance OEE, and reduce OpEx. Volkkommen's advanced sensors enable deployment in previously inaccessible areas, ensuring a rapid ROI.
          </p>
        </div>
    </PageIntro>
    <Container className="mt-16">
    <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
    </Container>
    <Cultures />
    <ContactSection />
    </>
  )
}

export default AboutPage