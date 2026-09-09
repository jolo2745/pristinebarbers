export const servicePrices = [
    { id: "skin-fade", title: "Skin fade/taper fade, cut and style", price: 20 },
    { id: "skin-fade-beard", title: "Skin fade/taper fade and beard trim/shape", price: 30 },
    { id: "standard-haircut", title: "Standard haircut and style", price: 16 },
    { id: "bu-student-fade", title: "BU student fade", price: 17 },
    { id: "standard-haircut-beard", title: "Standard haircut with beard trim/shape", price: 26 },
    { id: "beard-trim", title: "Beard trim and shape up", price: 10 },
    { id: "full-works", title: "Full works", price: 37 },
    { id: "hot-towel-shave", title: "Hot towel wet shave", price: 15 },
    { id: "nose-ear-wax", title: "Nose and ears waxed", price: 5 },
    { id: "head-shave", title: "One grade all over/head shave", price: 10 },
    { id: "oap-clipper-cut", title: "OAP clipper cut", price: 10 },
    { id: "scissor-cut", title: "Scissor cut", price: 17 },
    { id: "oap-scissor-cut", title: "OAP scissor cut", price: 12 },
    { id: "restyle", title: "Restyle", price: 25 },
    { id: "kids-skin-fade", title: "Kids' skin fade (under 12)", price: 15 },
    { id: "kids-standard-haircut", title: "Kids' standard haircut (under 12)", price: 12 },
    { id: "head-shave-beard", title: "Head shave and beard trim/shape", price: 22 },
] as const;

export type ServicePrice = (typeof servicePrices)[number];

const popularServiceDetails = [
    { id: "skin-fade", label: "Skin Fade", image: "/skinfade_v4.webp" },
    { id: "beard-trim", label: "Beard Trim", image: "/beardtrim_v4.webp" },
    { id: "bu-student-fade", label: "BU Student Fade", image: "/scissorcut_v4.webp" },
    { id: "kids-skin-fade", label: "Kids' Skin Fade", image: "/kidcut_v4.webp" },
] as const;

export const popularServices = popularServiceDetails.map((service) => {
    const matchingPrice = servicePrices.find((item) => item.id === service.id);

    if (!matchingPrice) {
        throw new Error(`Missing price for popular service: ${service.id}`);
    }

    return {
        ...service,
        price: matchingPrice.price,
    };
});

export const formatPrice = (price: number) => `£${price}`;
