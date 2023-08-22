const Footer = () => {
  const Datenew = new Date(Date.now()).getFullYear();
  // console.log(Datenew);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-2 py-6 md:items-center flex-wrap justify-center px-2 md:px-10 bg-blue-950 text-white">
        <div className="flex-[3]">
          <h6 className="font-bold text-xl">Multimart</h6>
          <p className="w-[100%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            laboriosam placeat voluptatibus consequuntur, veritatis praesentium
            molestiae ratione provident autem voluptatem?
          </p>
        </div>
        <div className="flex-1 text-start md:text-center">
          <h6 className="font-bold text-xl">Top Categories</h6>
          <ul>
            <li>Mobile Phone</li>
            <li>Modern Sofas</li>
            <li>Arm Chairs</li>
            <li>Smart Watches</li>
          </ul>
        </div>
        <div className="flex-1 text-start md:text-center">
          <h6 className="font-bold text-xl">Useful Links</h6>
          <ul>
            <li>Shop</li>
            <li>Cart</li>
            <li>Login</li>
            <li>Private Policy</li>
          </ul>
        </div>
        <div className="flex-1 text-start">
          <h6 className="font-bold text-xl">contact</h6>
          <ul>
            <li>
              <i className="ri-map-pin-line"></i>@123 street near road
            </li>
            <li>
              <i className="ri-smartphone-line"></i>09-00678-601
            </li>
            <li>
              <i className="ri-mail-line"></i>syedb4115@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center bg-blue-950 text-white py-2">
        <p>All rights reserved {Datenew}</p>
      </div>
    </>
  );
};
export default Footer;
