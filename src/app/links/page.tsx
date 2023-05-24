import Linq from '@/components/Linq';

const heading = 'font-bold my-2';

const LinksPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h2 className={heading}>Emergency Medicine</h2>
      <Linq
        title='Taming the SRU'
        link='https://www.tamingthesru.com/'
        category='Resources, Blog, Podcast'
        description="Taming the SRU (Shock Resuscitation Unit) features peer-reviewed content from the University of Cincinnati's EM residency program."
      />
      <Linq
        title='EMCrit'
        link='https://emcrit.org/'
        category='Resources, Blog, Podcast'
        description='"...evidence-based information from the fields of critical care, resuscitation, and trauma and translate it for bedside use in the Emergency Department (ED) and the Intensive Care Unit (ICU)." - emcrit.org'
      />
      <Linq
        title='Life in the Fast Lane'
        link='https://litfl.com/'
        category='Resources'
        description='An extensive library of EM educational resources, including ECGs, radiology, procedures, and more.'
      />
      <h2 className={heading}>Military / Tactical Medicine</h2>
      <Linq
        title='Deployed Medicine'
        link='https://deployedmedicine.com/'
        category='Resources'
        description='Casualty care resources and guidelines distributed by the U.S. Defense Health Agency.'
      />
      <Linq
        title='Prolonged Field Care'
        link='https://prolongedfieldcare.org/'
        category='Resources, Blog, Podcast'
        description='A wide range of resources and discussion on austere and combat medicine topics.'
      />
      <h2 className={heading}>Tropical Medicine</h2>
      <Linq
        title='Parasites Without Borders'
        link='https://parasiteswithoutborders.com/'
        category='Resources, Education'
        description='"A comprehensive, advanced educational resource and disseminator of basic and clinical information dealing with all aspects of the global problems associated with the acquisition of parasitic diseases that adversely affect people around the world." - parasiteswithoutborders.com'
      />
      <Linq
        title='The Asclepius Snakebite Foundation'
        link='https://www.snakebitefoundation.org/'
        category='Resources, Education'
        description='Snakebite education and treatment guidelines.'
      />
      <h2 className={heading}>Anesthesia</h2>
      <Linq
        title='Military Advanced Regional Anesthesia and Analgesia'
        link='https://www.dvcipm.org/clinical-resources/dvcipm-maraa-book-project/'
        category='Resources, Education'
        description='The DVCIPM (MARAA) handbook is a resource for advanced regional anesthesia and pain management practices.'
      />
      <Linq
        title='New York School of Regional Anesthesia'
        link='https://www.nysora.com/'
        category='Resources, Education'
        description='"NYSORA promotes the practice of Regional Anesthesia, Pain Management, and Perioperative Medicine through timely, free-of-charge dissemination of new information using far-reaching and innovative educational resources." - nysora.com'
      />
      <h2 className={heading}>Surgery / Wound Care</h2>
      <Linq
        title='Laceration Repair'
        link='https://lacerationrepair.com/'
        category='Resources, Blog'
        description='Practical resource for suturing techniques and wound care practices.'
      />
      <h2 className={heading}>Fundamentals</h2>
      <Linq
        title='Osmosis'
        link='https://www.osmosis.org/'
        category='Video-Based Education'
        description='High-quality, high-yield educational videos covering topics including biochemistry, anatomy, physiology, pathophysiology, pharmacology, and more.'
      />
    </div>
  );
};

export default LinksPage;
