import { useRouter } from 'next/router';

const ConfirmRide = () => {
  const router = useRouter();
  const { from, to, rideType, date, time } = router.query;

  return (
    <div>
      <h1>Ride Confirmation</h1>
      <p><strong>From:</strong> {from}</p>
      <p><strong>To:</strong> {to}</p>
      <p><strong>Ride Type:</strong> {rideType}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
    </div>
  );
}

export default ConfirmRide;
