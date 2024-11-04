

const CategoryCard = ({ categoryCard }) => {
    console.log(categoryCard)
    const {logo,category_name,availability}=categoryCard
    return (
        <div className="bg-gradient-to-r from-[#9873ff1c]  to-[#9873ff28] p-3 rounded-md mb-4">
            <div>
            <img src={logo} alt="" />
            </div>
            <h2>{category_name}</h2>
            <p>{ availability}</p>
        </div>
    );
};

export default CategoryCard;