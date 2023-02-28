import React from 'react'
import { useSelector } from 'react-redux';

function About() {
    const theme = useSelector(state => state.theme)
    return (
        <>
            <h2 className={`bg-${theme} text-${theme === 'dark' ? 'white' : 'dark'}`} id="about" >About</h2>
            <p className={`bg-${theme} text-${theme === 'dark' ? 'white' : 'dark'}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid repellendus et reiciendis, repudiandae ipsam unde veniam cupiditate vero enim, nobis eveniet ipsum assumenda, magnam sed inventore! Nemo id impedit sunt voluptate necessitatibus, reprehenderit eos, omnis quia, iusto corrupti quam ea. Quae natus dolorum consequatur voluptas exercitationem commodi dolore, consectetur libero hic harum id corrupti est quas modi repellendus ex voluptatem aliquam eum molestias perspiciatis in inventore beatae. Molestiae, sapiente! Reprehenderit sequi unde, quae vero, dolores nemo aliquam ab fuga, molestiae porro quod voluptatem sed veritatis. Ducimus recusandae cumque non voluptate saepe numquam veniam necessitatibus consectetur quam laborum. Voluptas, tenetur. Dignissimos, vel repudiandae tempore quia eos porro quisquam placeat nihil commodi quod nostrum harum. Sunt consequatur repellendus enim necessitatibus, libero sed dolore optio ipsa! Laboriosam eos quasi numquam at vero aspernatur explicabo fugit hic vel accusamus aperiam, exercitationem, veniam saepe possimus, nulla corporis unde eaque praesentium reiciendis. Omnis, totam nesciunt ipsa eum corrupti expedita temporibus ad, ut error fugiat exercitationem velit facilis aspernatur eligendi soluta nihil blanditiis veniam corporis facere harum laboriosam aliquid laborum. Eius reiciendis delectus nobis quas nemo sit aspernatur aliquam quaerat commodi? Nam, minima. Quis exercitationem aliquid, molestiae necessitatibus enim totam illo at minus distinctio voluptate nisi voluptatem ut doloremque officia officiis aperiam architecto, fugiat aliquam impedit nostrum dolorem voluptatibus commodi eveniet! Modi quod quibusdam possimus velit vel minus sequi laudantium magni perspiciatis? Eveniet vero quidem quas praesentium! Pariatur sed explicabo exercitationem odio fuga. Nihil dolores praesentium blanditiis quae laudantium fugit ab sapiente expedita quas dolorem illo error, doloribus vel tempore, tempora laboriosam assumenda at. Architecto culpa vero atque sed? Eaque, illum numquam quae molestiae maiores qui neque non! Quaerat eos, aliquid ducimus architecto repellendus a asperiores quibusdam dignissimos? Voluptatem esse nemo in facere soluta temporibus quidem magnam, quaerat quos nam dolorum, minima assumenda iure mollitia cupiditate accusamus voluptates nesciunt at. Veritatis minus inventore vitae nemo asperiores magni hic vero maxime commodi harum eligendi tenetur laboriosam, sunt iure voluptates? Rerum hic excepturi minus libero quidem iste, fugiat, perferendis obcaecati mollitia nulla maiores! Earum eius architecto voluptates et voluptas. Beatae ullam dolorem rem necessitatibus sequi quam illum vero reiciendis. Est obcaecati, minus fugiat tenetur rerum iusto. Voluptatem porro ipsum eum reprehenderit iure error, laudantium atque odit nemo, enim veritatis nihil consectetur quidem cupiditate recusandae praesentium earum at nisi, amet repellendus dignissimos? Veritatis accusantium, expedita a minima odit magnam eius numquam nihil assumenda impedit dicta vero reprehenderit culpa similique odio! Molestias laudantium autem ad repudiandae reprehenderit tempora, distinctio, corporis ab, blanditiis perferendis placeat sint deserunt. Natus corporis autem expedita dolorum quae necessitatibus sed tempore, eius sit repellat, nobis aliquam aliquid dolores, magnam a sunt impedit nihil earum! Aperiam reiciendis at officia dolor, et sapiente expedita molestias odit possimus placeat, numquam quis aut doloremque mollitia, fugiat obcaecati quod nam veritatis libero voluptatibus. Ad fuga accusamus, laboriosam aut quo delectus? Accusantium, laboriosam et esse perspiciatis praesentium soluta ex id molestiae sit error rem ducimus eligendi libero. Repellat praesentium vitae distinctio. Fugit pariatur ad labore voluptatibus. Veniam, quasi blanditiis quaerat nisi laboriosam autem!
            </p>
        </>
    )
}

export default About;