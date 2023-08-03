import ColorOpacity from '@/components/ColorOpacity';
import Colors from '@/components/Colors'

export default function Home() {

  let renderColors = [], renderColorOpacity = [];
  for(let i=1, j=10; i<10; i++, j--){
    renderColors.push(  <Colors key={i} color={`rgba(241, 80, 37, ${i/10})`}/>)
    renderColorOpacity.push(<ColorOpacity key={j} brightness={`brightness(${j*10}%)`}/>)
  }
  

  return (
  
    <main className='bg-[#f8fafc] min-h-screen'> 
      
      <h2 className='text-[25px] text-[#0f172a] tracking-wide py-16 px-7 inline-block'> Color Generator </h2>
      <div className='bg-white w-[3.5rem] h-10 text-white inline-block relative top-[5px]'>
        <div className='relative left-[7%] top-[9%] bg-black p-2 w-12 h-8 text-white inline-block'></div>
      </div>
      <input type="text" name="color" id="color" placeholder='#f15025' className='text-[18px] font-normal rounded-sm h-10 w-[18rem] pl-3 text-[#808c9c]'/>
      <input type="submit" name="submit" id="submit" className='text-[14px] tracking-wider text-white rounded-r-md h-[40px] relative -top-[2px] w-[5rem] bg-[#645cff]'/>
      <div className='ml-[2px] flex flex-wrap justify-start'>
        
        { <Colors color="#fff"/> }
        {
          renderColors
        }        
        {
          renderColorOpacity
        }
        
      </div>

      
    </main>


  )
}
