import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import PhilipsEarpod from './assets/philipsearpod.jpeg';
import SamsungGalaxyRing from './assets/samsunggalaxyring.jpeg';
import Iphone15ProMax from './assets/iphone15promax.jpeg';
import Iphone17Pro from './assets/iphone17pro.jpeg';
import SonyBlack from './assets/sonyheadphone.jpeg';
import SmartTVLG from './assets/smartTVLGOLED.jpeg';
import AppleWatchUltra from './assets/applewatchultra.jpeg';
import './EcommerceSite.css';

const PRODUCTS = [
    {
        id: 1,
        name: "Neural Link Goggles",
        price: "₦450,000",
        hue: 280,
        size: 'wide',
        category: 'Visuals',
        tag: 'Luxury',
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "Philips Earpod",
        price: "₦62,000",
        hue: 200,
        size: 'tall',
        category: 'Audio',
        tag: 'New',
        image: PhilipsEarpod
    },
    {
        id: 3,
        name: "Glass Mouse",
        price: "₦75,000",
        hue: 40,
        size: 'compact',
        category: 'Devices',
        tag: '',
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Samsung Galaxy Ring",
        price: "₦105,000",
        hue: 10,
        size: 'compact',
        category: 'Devices',
        tag: '',
        image: SamsungGalaxyRing
    },
    {
        id: 5,
        name: "Aero Buds",
        price: "₦180,000",
        hue: 190,
        size: 'tall',
        category: 'Audio',
        tag: 'Best Seller',
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        name: "Nano Drone",
        price: "₦320,000",
        hue: 120,
        size: 'compact',
        category: 'Devices',
        tag: '',
        image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 7,
        name: "Prism Speaker",
        price: "₦145,000",
        hue: 340,
        size: 'wide',
        category: 'Audio',
        tag: 'Limited',
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 8,
        name: "Flux Keyboard",
        price: "₦165,000",
        hue: 210,
        size: 'compact',
        category: 'Devices',
        tag: '',
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800"
    },
    {
        id: 9,
        name: "iPhone 15 Pro Max",
        price: "₦1,850,000",
        hue: 210,
        size: 'tall',
        category: 'Phones',
        tag: 'Sale',
        image: Iphone15ProMax
    },
    {
        id: 10,
        name: "iPhone 17 Pro",
        price: "₦2,450,000",
        hue: 210,
        size: 'tall',
        category: 'Phones',
        tag: 'Luxury',
        image: Iphone17Pro
    },
    {
        id: 11,
        name: "AirPods Max Silver",
        price: "₦950,000",
        hue: 200,
        size: 'wide',
        category: 'Audio',
        tag: 'Elite',
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=800"
    },
    {
        id: 12,
        name: "Sony XM5 Black",
        price: "₦580,000",
        hue: 0,
        size: 'tall',
        category: 'Audio',
        tag: 'Hot',
        image: SonyBlack
    },
    {
        id: 13,
        name: "Bose QuietComfort",
        price: "₦420,000",
        hue: 220,
        size: 'compact',
        category: 'Audio',
        tag: '',
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800"
    },
    {
        id: 14,
        name: "Samsung 75\" Neo QLED",
        price: "₦3,200,000",
        hue: 230,
        size: 'wide',
        category: 'Screens',
        tag: 'Luxury',
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800"
    },
    {
        id: 15,
        name: "LG OLED C3 55",
        price: "₦1,450,000",
        hue: 250,
        size: 'wide',
        category: 'Screens',
        tag: 'Cinema',
        image: SmartTVLG
    },
    {
        id: 16,
        name: "Apple Watch Ultra",
        price: "₦1,100,000",
        hue: 20,
        size: 'tall',
        category: 'Watches',
        tag: 'Pro',
        image: AppleWatchUltra
    },
    {
        id: 17,
        name: "iPad Pro M2",
        price: "₦1,600,000",
        hue: 240,
        size: 'tall',
        category: 'Phones',
        tag: 'New',
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
    },
    {
        id: 18,
        name: "Gaming Mouse Pad",
        price: "₦25,000",
        hue: 300,
        size: 'compact',
        category: 'Devices',
        tag: 'Cheap',
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800"
    },
    {
        id: 19,
        name: "Camera Lens 50mm",
        price: "₦310,000",
        hue: 10,
        size: 'tall',
        category: 'Visuals',
        tag: '',
        image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=800"
    },
    {
        id: 20,
        name: "Studio Display",
        price: "₦2,400,000",
        hue: 180,
        size: 'wide',
        category: 'Screens',
        tag: '',
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800"
    }
]

function EcommerceSite() {
    const [activeTab, setActiveTab] = useState('All');
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCard] = useState([]);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (searchQuery === "") {
            setIsLoading(true);
            const timer = setTimeout(() => setIsLoading(false), 400);
            return () => clearTimeout(timer);
        }
    }, [activeTab, searchQuery]);

    const filteredProducts = PRODUCTS ? PRODUCTS.filter(p => {
        const matchesTab = activeTab === 'All' ? true : p.category === activeTab;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    }) : [];

    const toggleWishList = (PRODUCTSId) => {
        setWishlist(prev => prev.includes(PRODUCTSId) ? prev.filter(id => id !== PRODUCTSId) : [...prev, PRODUCTSId]
        );
    };

    const addToCart = (PRODUCTS) => {
        setCard(prev => [...prev, PRODUCTS]);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

  return (
    <div className="shop-wrapper">
        <AnimatePresence>
            {showToast && (
                <motion.div 
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 20, x: '-50%', opacity: 1 }}
                exit={{ y: -100, x: '-50%', opacity: 0 }}
                className="toast-notification"
                >
                <ShoppingCart size={16} />
                <span>Added to Bag!</span>
                </motion.div>
            )}
        </AnimatePresence>

        <header className="shop-nav">
            <div className="nav-top">
                <div className="logo">TECH <span className='logo-span'> HUB </span> </div>
                <div className="nav-icons">
                    <div className='search-container'>
                        <AnimatePresence>
                            {isSearchOpen && (
                                <motion.input
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: 200, opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className='search-input'
                                />
                            )}
                        </AnimatePresence>
                        <Search
                            size={18}
                            className="nav-icon-btn" 
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        />
                    </div>
                    <div className='icon-badge'>
                        <Heart size={18} fill={wishlist.length > 0 ? "white" : "none"} />
                            {wishlist.length > 0 && <span> {wishlist.length} </span>}
                    </div>
                    <div className="cart-icon">
                        <ShoppingCart size={18} />
                        <AnimatePresence mode='popLayout'>
                            <motion.span
                                key={cart.length}
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                            >
                                {cart.length}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className="tab-switcher">
                {['All', 'Phones', 'Audio', 'Screens', 'Visuals', 'Watches', 'Devices'].map(tab => (
                    <button 
                    key={tab}
                    className={activeTab === tab ? 'active' : ''}
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab}
                    </button>
                ))}
            </div>
        </header>

        <div className="notch-connector">
            <div className="white-bridge" />
        </div>

        <main className="product-grid">
            <AnimatePresence mode='popLayout'>
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='loader-wrapper'
                    >
                        <div className='loading-spinner' />
                    </motion.div>
                ) : (
                    <motion.div
                        key={activeTab}
                        className="grid-inner"
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.05 }
                            }
                        }}
                    >
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(PRODUCTS => (
                                <motion.div 
                                    key={PRODUCTS.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.25, 1, 0.5, 1]
                                    }}
                                    whileHover={{ y: -10 }}
                                    className={`product-card ${PRODUCTS.size}`}
                                    style={{
                                    background: `hsla(${PRODUCTS.hue}, 20%, 100%, 0.5)`,
                                    backdropFilter: 'blur(12px)',
                                    border: `1px solid hsla(${PRODUCTS.hue}, 40%, 60%, 0.2)`
                                    }}
                                >
                                    <button
                                        className='wishlist-btn'
                                        onClick={() => toggleWishList(PRODUCTS.id)}
                                    >
                                        <Heart
                                            size={16}
                                            fill={wishlist.includes(PRODUCTS.id) ? "#ff3b30" : "none"} 
                                            stroke={wishlist.includes(PRODUCTS.id) ? "#ff3b30" : "white"}
                                        />
                                    </button>

                                    {PRODUCTS.tag && <div className="product-tag">{PRODUCTS.tag}</div>}

                                    <div className="product-image-area">
                                        <img 
                                            src={PRODUCTS.image} 
                                            alt={PRODUCTS.name} 
                                            className="product-img" 
                                        />
                                        <div className="glow" style={{ background: `hsl(${PRODUCTS.hue}, 100%, 70%)` }} />
                                    </div>
                                    <div className="product-info">
                                    <h3>{PRODUCTS.name}</h3>
                                    <p className='price-tag'>{PRODUCTS.price}</p>
                                    <button
                                        className='buy-btn'
                                        onClick={() => addToCart(PRODUCTS)}
                                    >
                                        Add to Bag
                                    </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="no-products-container">
                                <p>No products found in the "{activeTab}" category.</p>
                                <button 
                                    onClick={() => setActiveTab('All')}
                                    className="buy-btn" 
                                    style={{ width: 'auto', padding: '10px 30px', marginTop: '20px' }}
                                >
                                    View All Products
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    </div>
  );
}

export default EcommerceSite;