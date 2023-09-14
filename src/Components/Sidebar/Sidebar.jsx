import pt from 'prop-types'
const Sidebar = ({ course, credit, price }) => {
    let remaining = 20 - credit;
    return (
        <div className="w-1/4 p-6">
            <h2 className="text-prim text-lg font-bold">Credit Hour Remaining {remaining} hr</h2>
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>
            <h2 className="text-hard text-xl font-bold mb-5">Course Name</h2>
            <ol className='list-decimal list-inside mb-6'>
                {
                    course.map(card => <li
                        key={card.id}
                        className='text-soft'
                    >{card.title}</li>)
                }
            </ol>
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>
            <h3 className='my-4 text-mid font-medium'>Total Credit Hour : {credit}</h3>
            <div className="w-full h-[1px] bg-gray-300 my-4"></div>
            <p className='text-mid font-semibold'>Total Price : { price }</p>

        </div>
    );
};
Sidebar.propTypes = {
    course: pt.array,
    credit: pt.number,
    price: pt.number,
}
export default Sidebar;