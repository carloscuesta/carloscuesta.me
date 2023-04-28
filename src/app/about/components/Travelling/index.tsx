import SectionTitle from 'src/components/SectionTitle'
import Label from './Label'
import Map from './Map'

const Travelling = () => (
  <section>
    <SectionTitle title="Travelling" />

    <div className="mb-7 flex flex-col items-start justify-between sm:flex-row sm:space-x-8">
      <div className="mb-3 sm:mb-0">
        <p>
          I've been lucky enough to discover many countries around the world.
        </p>
        <p>These are the ones that I visited. </p>
      </div>

      <div className="flex space-x-2">
        <Label label="Visited" color="neutral" />

        <Label label="Home" color="sky" />
      </div>
    </div>

    <Map />
  </section>
)

export default Travelling
