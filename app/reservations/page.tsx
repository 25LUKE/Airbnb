import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import ReservationClient from "./ReservationClient";



const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized"
                    subtitle="Please login!"
                />
            </ClientOnly>
        )
    }

    const Reservations = await getReservations({
        authorId: currentUser.id // all reservations that other people have made on our listings
    });

    if (Reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No reservations found"
                    subtitle="Looks like you have no reservation on your property"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationClient 
                reservations={Reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}


export default ReservationsPage;