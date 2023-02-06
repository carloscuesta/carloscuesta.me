import Wrapper from 'src/components/shared/Wrapper'
import styles from './styles.module.css'

const Biography = () => (
  <section>
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.biographyContainer}>
          <p className={styles.text}>
            I&#39;m a Front End Engineer interested in{' '}
            <b>design</b>, <b>under engineering</b> and <b>open source</b>.
            I work at <a target='_blank' rel='noopener noreferrer' href='https://n26.com'>N26</a>.
          </p>

          <p className={styles.text}>
            I&#39;m focused on building products with JavaScript, specifically React and React-Native.
          </p>

          <p className={styles.text}>
            When I&#39;m not coding, I&#39;m likely at the gym or surfing the city with my longboard.
          </p>

          <p className={styles.text}>
            You can find me on{' '}
            <a href='https://github.com/carloscuesta' target='_blank' rel='noopener noreferrer'>GitHub</a>,{' '}
            <a href='https://twitter.com/crloscuesta' target='_blank' rel='noopener noreferrer'>Twitter</a>{' and '}
            <a href='https://linkedin.com/in/crloscuesta' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
        </div>

        <div className={styles.pictureContainer}>
          <img
            alt='Carlos Cuesta'
            className={`lazyload ${styles.picture}`}
            data-src='https://res.cloudinary.com/carloscuesta/image/upload/s--ekQN9GP_--/c_scale,w_320/v1594588508/carloscuesta.jpg'
            src='https://res.cloudinary.com/carloscuesta/image/upload/s--rq7ZUVpY--/c_scale,e_blur:100,h_120,q_10,w_120/v1594588508/carloscuesta.jpg'
          />
        </div>

      </div>
    </Wrapper>
  </section>
)

export default Biography
