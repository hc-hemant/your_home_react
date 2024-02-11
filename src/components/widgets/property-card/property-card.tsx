const PropertyCard = () => {
    return (
        <section className="bg-white rounded-xl flex flex-col m-w-80 h-96 relative shadow-2xl">
            <section className="h-4/6 bg-[url('/src/assets/bg_signup.jpg')] bg-cover rounded-t-xl"></section>
            <section className="flex-1 p-4 flex flex-col justify-between">
                <section>
                    <p className="text-2xl font-medium">Apartment Name</p>
                    <p>
                        <span>Street Name</span>
                        <span>,</span>
                        <span>City</span>
                    </p>
                </section>
                <section>
                    <span className="text-xl">3BHK</span>
                    <span className="px-3">|</span>
                    <span className="text-xl">Immediate</span>
                    <span className="px-3">|</span>
                    <span className="text-xl">2300 SF</span>
                </section>
            </section>
        </section>
    )
}

export default PropertyCard;