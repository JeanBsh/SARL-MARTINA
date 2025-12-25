import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    // Mock data to return if no API key/Place ID is configured
    const mockReviews = [
        {
            author_name: "Marie Laurent",
            profile_photo_url: "https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0",
            rating: 5,
            relative_time_description: "il y a un mois",
            text: "Une transformation incroyable de notre espace de vie. L'équipe a su capter notre vision et l'exécuter avec une précision chirurgicale."
        },
        {
            author_name: "Thomas Dubois",
            profile_photo_url: "https://images.unsplash.com/photo-1649123245135-4db6ead931b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0",
            rating: 5,
            relative_time_description: "il y a 2 semaines",
            text: "Le professionnalisme et la qualité des finitions sont incomparables. Un chantier propre et livré dans les temps."
        },
        {
            author_name: "Sophie Martin",
            profile_photo_url: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0",
            rating: 5,
            relative_time_description: "il y a 3 mois",
            text: "Faire appel à SARL MARTINA a été la meilleure décision pour notre rénovation électrique et plomberie. Un travail d'expert."
        }
    ];

    if (!apiKey || !placeId) {
        console.warn("GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID is not defined. Returning mock data.");
        return NextResponse.json({ result: { reviews: mockReviews } });
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=fr`
        );

        if (!response.ok) {
            throw new Error(`Google Places API error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.status !== "OK") {
            console.error("Google API returned status:", data.status, data.error_message);
            // Fallback to mock data if the specific API call fails (e.g. invalid key)
            return NextResponse.json({ result: { reviews: mockReviews } });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Failed to fetch Google reviews:", error);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 }
        );
    }
}
