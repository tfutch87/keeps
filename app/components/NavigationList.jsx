import React from 'react'
import categories from "@/app/components/categories";
import Link from 'next/link';



export default function NavigationList() {

    const categoryOptions = categories()



    return (
        <div className="navigation-container close">
        <ul className="navigation-list-old">

            {categoryOptions.filter((category) => category !== "-Select Category-").map((category, index) => (
                
                <li key={category} id="category" ><Link href={`/secretCategory/${category}`}>{category}</Link></li>
            ))}

        </ul>
        </div>
    )
}
