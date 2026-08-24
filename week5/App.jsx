import { useState } from 'react';
import './App.css';

const posts = [
    { title: 'Bootstrap Basics', category: 'Bootstrap', image: 'https://picsum.photos/500/300?1', text: 'Learn how Bootstrap makes websites responsive and attractive using ready-made components.' },
    { title: 'CSS Tips', category: 'CSS', image: 'https://picsum.photos/500/300?2', text: 'Discover useful CSS tricks to improve your website design and user experience.' },
    { title: 'JavaScript Guide', category: 'JavaScript', image: 'https://picsum.photos/500/300?3', text: 'Understand JavaScript fundamentals and create interactive web pages.' },
    { title: 'Responsive Design', category: 'HTML', image: 'https://picsum.photos/500/300?4', text: 'Create websites that work perfectly on mobile, tablet, and desktop devices.' },
];

const categories = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'];

function App() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [menuOpen, setMenuOpen] = useState(false);
    const visiblePosts = posts.filter((post) => {
        const matchesSearch = `${post.title} ${post.text}`.toLowerCase().includes(search.toLowerCase());
        return matchesSearch && (activeCategory === 'All' || post.category === activeCategory);
    });

    return (
        <div className="site-shell">
            <nav className="navbar">
                <div className="container nav-inner">
                    <a className="brand" href="#home">MyBlog</a>
                    <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /><span /></button>
                    <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
                        <a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="#articles" onClick={() => setMenuOpen(false)}>Articles</a>
                        <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
                        <a href="#about" onClick={() => setMenuOpen(false)}>Contact</a>
                    </div>
                </div>
            </nav>

            <main>
                <section className="hero" id="home">
                    <div className="hero-content"><p className="eyebrow">A practical corner of the web</p><h1>Welcome to My Blog</h1><p className="hero-subtitle">Learn Web Development with Bootstrap 5</p><a href="#articles" className="button button-warning">Read Blogs <span aria-hidden="true">-&gt;</span></a></div>
                </section>

                <div className="container content-layout" id="articles">
                    <section className="posts-section" aria-labelledby="latest-heading">
                        <div className="section-heading"><div><p className="eyebrow">Fresh from the editor</p><h2 id="latest-heading">Latest Articles</h2></div><span className="post-count">{visiblePosts.length} posts</span></div>
                        <div className="post-grid">
                            {visiblePosts.length > 0 ? visiblePosts.map((post) => <article className="blog-card" key={post.title}><img src={post.image} alt="" /><div className="card-body"><span className="tag">{post.category}</span><h3>{post.title}</h3><p>{post.text}</p><a href="#about" className="read-link">Read More <span aria-hidden="true">-&gt;</span></a></div></article>) : <p className="empty-state">No articles match your search.</p>}
                        </div>
                    </section>

                    <aside className="sidebar">
                        <div className="sidebar-block search-block"><p className="eyebrow">Find a topic</p><h2>Search</h2><label htmlFor="search">Search articles</label><input id="search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try CSS" /></div>
                        <div className="sidebar-block" id="categories"><p className="eyebrow">Browse by subject</p><h2>Categories</h2><div className="category-list"><button className={activeCategory === 'All' ? 'selected' : ''} onClick={() => setActiveCategory('All')}>All articles</button>{categories.map((category) => <button className={activeCategory === category ? 'selected' : ''} key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div></div>
                    </aside>
                </div>

                <section className="about" id="about"><div className="container about-inner"><p className="eyebrow">Why MyBlog exists</p><h2>Build better things for the web.</h2><p>This blog shares tutorials on HTML, CSS, Bootstrap, JavaScript, and modern web development.</p></div></section>
            </main>
            <footer><div className="container">(c) 2026 MyBlog <span>Designed with Bootstrap 5</span></div></footer>
        </div>
    );
}

export default App;