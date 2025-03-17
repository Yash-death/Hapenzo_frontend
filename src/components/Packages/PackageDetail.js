import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import './PackageDetail.css';

const packageDetails = {
  1: {
    title: "Adults Birthday Party Champagne Decor",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800",
    price: 7999,
    originalPrice: 9999,
    rating: 4.5,
    inclusions: [
      "Ring stand of 6x6 ft",
      "Balloon arch of 200 balloons (Black, White and Silver chrome color)",
      "1 Balloon pillar of 2 ft",
      "2 Champagne bottle foil balloons",
      "Happy Birthday neon light",
      "3 Paper cake tables",
      "Name led letters",
      "1 Cake stand, 1 Cup cake stand and 2 Bird cages",
      "2 Digit marquee led"
    ],
    thingsToRemember: [
      "Except balloons, all the items in the inclusions are on rental purpose and need to be returned after the event.",
      "A consistent power supply is essential for timely service completion. Please ensure there are no power interruptions.",
      "Customer need to provide a stool or a ladder to complete the decoration.",
      "PartyOne team will not clean the party place after completion of the event.",
      "Please ensure rental items are returned in their original condition. Any damage to rental items incurred during use, and it is chargeable based on the item."
    ],
  },
  2: {
    title: "Aeroplane Theme Birthday Decoration",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    price: 8999,
    originalPrice: 10999,
    rating: 4.7,
    inclusions: [
      "3D Aeroplane backdrop (6x6 ft)",
      "Balloon arch of 250 balloons (Blue, White, and Red color)",
      "Aeroplane-themed cake table setup",
      "Cloud-shaped balloons",
      "2 Aeroplane foil balloons",
      "Happy Birthday neon light",
      "Kids seating arrangement (up to 10 chairs)",
      "Welcome board with the birthday child's name"
    ],
    thingsToRemember: [
      "Backdrop and furniture are on rental basis and must be returned.",
      "Please ensure sufficient space for the setup.",
      "Customer needs to provide a power supply for neon light installation.",
      "Party organizers do not provide after-party cleanup services."
    ]
  },
  3: {
    title: "Amazing Birthday Neon Light Ring Decoration",
    image: "https://plus.unsplash.com/premium_photo-1675278299445-9765d43f8418?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800",
    price: 5499,
    originalPrice: 6999,
    rating: 4.9,
    inclusions: [
      "6x6 ft golden neon light ring",
      "100 multicolored balloons",
      "Customized happy birthday neon nameplate",
      "Floor setup with confetti decor",
      "Personalized picture booth"
    ],
    thingsToRemember: [
      "All neon lights and structures must be returned post-event.",
      "A consistent power supply is mandatory for the neon setup.",
      "The package includes set up only; cleaning post-event is not covered."
    ]
  },
  4: {
    title: "Rustic Garden Party Setup",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
    price: 12999,
    originalPrice: 15999,
    rating: 4.8,
    inclusions: [
      "Wooden rustic backdrop with floral decorations",
      "Fairy lights and hanging lanterns",
      "Seating arrangements with cushions and rustic stools",
      "Vintage-style dessert table setup",
      "Customized name tag for the guest of honor",
      "1 Digital photo booth setup"
    ],
    thingsToRemember: [
      "All furniture and decor items are on rental and must be returned in good condition.",
      "Customer needs to provide outdoor power for lighting.",
      "Setup area should be flat and free of debris before decoration begins."
    ]
  },
  5: {
    title: "Elegant White & Gold Theme",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    price: 9999,
    originalPrice: 12999,
    rating: 4.6,
    inclusions: [
      "6x6 ft white and gold floral backdrop",
      "Balloon arch (White, Gold, and Golden Chrome color)",
      "2 Gold lantern props",
      "Golden cake table with sequined cover",
      "Happy Birthday name board with gold accents",
      "Customized gold party hats for guests"
    ],
    thingsToRemember: [
      "Decorative items must be returned post-event.",
      "Sufficient lighting is essential for the decor's full effect.",
      "Any customizations should be discussed at least 48 hours in advance."
    ]
  },
  6: {
    title: "Bohemian Beach Party Setup",
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800",
    price: 15999,
    originalPrice: 19999,
    rating: 4.9,
    inclusions: [
      "Bohemian backdrop with macramé details",
      "Rattan furniture and poufs",
      "String lights and tropical floral arrangements",
      "Picnic-style low table setup with decor plates and glasses",
      "Customized tropical-themed cake stand"
    ],
    thingsToRemember: [
      "Setup is ideal for outdoor locations. Customer must ensure accessibility to the area.",
      "All items are on rental and need to be returned without damage.",
      "In case of rain, alternative arrangements are not included in the package."
    ]
  },
  7: {
    title: "Kids Superhero Party Theme",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800",
    price: 6999,
    originalPrice: 8999,
    rating: 4.7,
    inclusions: [
      "6x6 ft superhero comic-style backdrop",
      "Balloon arch with primary colors (Red, Blue, and Yellow)",
      "Superhero cutouts for decor and photo ops",
      "Cape and mask for the birthday child",
      "Welcome standee with superhero theme"
    ],
    thingsToRemember: [
      "Superhero cutouts are on rental and need to be handled carefully.",
      "Proper lighting is required for the best effect of the backdrop.",
      "Ensure enough open space for the setup."
    ]
  },
  8: {
    title: "Minimalist Modern Celebration",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800",
    price: 11999,
    originalPrice: 14999,
    rating: 4.5,
    inclusions: [
      "6x6 ft minimalistic backdrop with abstract patterns",
      "Neutral and pastel balloon arrangement",
      "Elegant centerpiece for the cake table",
      "Mood lighting setup with LED strips",
      "Customized name sign in minimalist font"
    ],
    thingsToRemember: [
      "Backdrop and decor items are on rental and should be returned in original condition.",
      "Ensure a power outlet is available for mood lighting setup.",
      "The setup is ideal for indoor venues with ample space."
    ]
  },
  9: {
    title: "Vintage Tea Party Setup",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    price: 8499,
    originalPrice: 10499,
    rating: 4.6,
    inclusions: [
      "Elegant tea party table with vintage crockery",
      "Floral table runner and antique decor accents",
      "Chairs with lace covers",
      "Customized menu cards",
      "3-tier vintage cake stand"
    ],
    thingsToRemember: [
      "Crockery and decor items must be returned in original condition post-event.",
      "Customer needs to ensure the table area is clean and ready for setup.",
      "Package does not include catering or tea service."
    ]
  }
  // Add more package details as needed
};

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const details = packageDetails[id];

  if (!details) {
    return <div className="package-not-found">Package not found</div>;
  }

  const handleBookNow = () => {
    addToCart({...details, id: parseInt(id)});
    toast.success('Package added to cart!');
    navigate('/cart');
  };

  return (
    <div className="package-detail-container">
      <div className="package-detail-content">
        <div className="package-detail-image">
          <img src={details.image} alt={details.title} />
        </div>
        
        <div className="package-detail-info">
          <h1>{details.title}</h1>
          
          <div className="package-detail-price">
            <span className="current-price">₹{details.price}</span>
            <span className="original-price">₹{details.originalPrice}</span>
            <span className="discount">
              {Math.round(((details.originalPrice - details.price) / details.originalPrice) * 100)}% OFF
            </span>
          </div>

          <div className="package-detail-rating">
            <span className="stars">{'★'.repeat(Math.floor(details.rating))}{'☆'.repeat(5-Math.floor(details.rating))}</span>
            <span className="rating-number">{details.rating}</span>
          </div>

          <div className="package-detail-sections">
            <div className="inclusions-section">
              <h2>Inclusions</h2>
              <ul>
                {details.inclusions.map((item, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
                <li className="not-included">
                  <span className="cross-icon">✕</span>
                  Outside city limits
                </li>
              </ul>
            </div>

            <div className="things-to-remember">
              <h2>Things to Remember</h2>
              <ul>
                {details.thingsToRemember.map((item, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="book-now-button" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail; 