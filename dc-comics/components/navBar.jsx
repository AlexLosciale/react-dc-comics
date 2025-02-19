const navbar = () => {
    const menuLinks = [
        { id: 1, link: "CHARACTERS", url: "#" },
        { id: 2, link: "COMICS", url: "#" },
        { id: 3, link: "MOVIES", url: "#" },
        { id: 4, link: "TV", url: "#" },
        { id: 5, link: "GAMES", url: "#" },
        { id: 6, link: "COLLECTIBLES", url: "#" },
        { id: 7, link: "VIDEOS", url: "#" },
        { id: 8, link: "FANS", url: "#" },
        { id: 9, link: "NEWS", url: "#" },
        { id: 10, link: "SHOP", url: "#" }
      ];

    return (
        <ul className="menu">
            {
                menuLinks.map((menuLink) => {
                    return(
                        <li key ={menuLink.id}>
                            <a href={menuLink.url}>
                                {menuLink.link}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
};
export default navbar;