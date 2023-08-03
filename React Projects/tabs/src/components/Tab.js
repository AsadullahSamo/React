import React from 'react'

export default function Tab(props) {

  
  const professions = ["Full Stack Web Developer", "Front-End Engineer", "Engineering Intern"];
  const names = ["TOMMY", "BIGDROP", "CUKER"];
  const dates = ["December 2015 - Present", "May 2015 - December 2015", "May 2014 - September 2015"];
  const lis1 = ["Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
               "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
               "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",]
  const lis2 = ["Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
               "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
               "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid."]
  const lis3 = ["Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
                "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
                "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."]

  return (
    <div className='mt-24 md:m-auto text-center md:text-left'>
        <h2 className='md:pl-6 text-[31px] text-[#0f172a] tracking-wide '> {professions[props.i]} </h2>   
        <button className='md:ml-6 text-[#334155] bg-[#cbd5e1] rounded-[4px] px-[9px] py-1 mt-1'> {names[props.i]} </button>
        <p className='md:pl-6 text-[#64748b] tracking-wider mt-2'> {dates[props.i]} </p>

        <ul className='mt-9 md:w-[80%]'>
            <li className='flex md:justify-start md:pl-6 justify-center mt-6 text-[#334155]'> <span className='text-2xl font-bold text-[#14b8a6]'>&raquo;</span> <span className='ml-8 w-[80%]'> {lis1[props.i]} </span> </li>
            <li className='flex md:justify-start md:pl-6 justify-center mt-6 text-[#334155]'> <span className='text-2xl font-bold text-[#14b8a6]'>&raquo;</span> <span className='ml-8 w-[80%]'> {lis2[props.i]} </span> </li>
            <li className='flex md:justify-start md:pl-6 justify-center mt-6 text-[#334155]'> <span className='text-2xl font-bold text-[#14b8a6]'>&raquo;</span> <span className='ml-8 w-[80%]'> {lis3[props.i]} </span> </li>
        </ul>

    </div>
  )
    
}
