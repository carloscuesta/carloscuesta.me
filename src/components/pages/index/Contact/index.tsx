import Wrapper from 'src/components/shared/Wrapper'
import SectionTitle from 'src/components/shared/SectionTitle'

const Contact = () => (
  <section>
    <Wrapper>
      <SectionTitle
        subTitle="Let's make something together."
        title='Contact'
      />

      <div>
        <p>
          Feel free to send me an email if you&#39;re looking for a front end engineer,
          have a question or just want to say hi! 🙋‍♂️
        </p>

        <p>
          <a
            href='mailto:hi@carloscuesta.me'
            rel='noopener noreferrer'
            target='_blank'
          >
            Say hello
          </a>
        </p>
      </div>
    </Wrapper>
  </section>
)

export default Contact
