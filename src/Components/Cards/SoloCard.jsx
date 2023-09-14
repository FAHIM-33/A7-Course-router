import pt from 'prop-types'
const SoloCard = ({ card }) => {
    let { image, title, details, price, credit } = card;

    return (
        <div className='p-4 rounded-lg flex flex-col justify-between bg-white'>
            <div>
                <img className='w-full rounded-lg' src={image} alt="" />
                <h2 className='text-hard text-lg font-semibold my-4'>{title}</h2>
                <p className='text-soft text-sm'>{details}</p>
            </div>
            <div className=''>
                <div className='flex gap-4 font-medium text-soft mt-4 mb-6'>
                    <div className='flex gap-1 justify-center items-center'>
                        <img className='w-6' src="./dlr.svg" alt="broken" />
                        <p>Price:{price}</p>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                        <img className='w-6' src="./frame.svg" alt="broken" />
                        <p>Credit: {credit}hr</p>
                    </div>
                </div>
                <button className='w-full bg-prim rounded-lg py-2 text-white text-lg font-semibold'>Select</button>
            </div>
        </div>
    );
};
SoloCard.propTypes = {
    card: pt.object,
}
export default SoloCard;