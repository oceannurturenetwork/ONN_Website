import axios from "axios";

interface DonationData {
  name: string;
  email: string;
  amount: number;
  currency: string;
}

export const initiateDonation = async (donationData: DonationData) => {
  try {
    const response = await axios.post("/api/payments", donationData);
    return response.data; // Contains authorization URL
  } catch (error) {
    return false;
  }
};