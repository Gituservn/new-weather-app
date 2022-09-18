import React from 'react';

function TopButtons({query,setQuery}) {

    const cities = [
        {
            id: 1,
            title: 'Київ'
        },
        {
            id: 2,
            title: 'Вінниця'
        },
        {
            id: 3,
            title: 'Летичів'
        },
        {
            id: 4,
            title: 'Ободівка'
        },
        {
            id: 5,
            title: 'Тютьки'
        },
    ];
    console.log(query);
    return (
        <div className="flex items-center justify-around my-6 ">
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="text-white text-lg font-medium"
                    onClick={() => setQuery({q: city.title})}
                >
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;