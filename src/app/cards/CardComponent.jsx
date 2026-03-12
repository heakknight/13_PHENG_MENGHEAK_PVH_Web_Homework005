import Image from 'next/image';
import ViewComponentDetails from '../components/actions/ViewComponentDetails';
import BookmarkMarkCompoent from '../components/actions/BookmarkMarkCompoent';

const CardComponent = ({ item, onToggle }) => {
  return (
    <div className='w-[99%] bg-[#0d1117] ml-3 mr-5 rounded-lg border border-[#1c1f23] text-white p-4 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <div className='bg-white w-20 h-20 rounded-2xl overflow-hidden shrink-0'>
          <Image src={item.image} alt="Product" width={80} height={80} className="object-cover w-full h-full" />
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center gap-3'>
            <h3 className='font-bold text-lg'>{item.item_name}</h3>
            <span className='text-gray-400'>${item.item_price}</span>
            <BookmarkMarkCompoent onClick={onToggle} isSaved={item.saved} />
          </div>
          <p className='text-gray-400 text-sm mt-1'>
            {item.item_description}
          </p>
        </div>
      </div>
      <div className='shrink-0'>
        <ViewComponentDetails item={item} />
      </div>
    </div>
  )
}

export default CardComponent;