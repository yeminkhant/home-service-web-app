import { gql, request } from "graphql-request";
// const {gql, default: request} = require("graphql-request")

const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);

  return result;
};

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessByCategory = async (category) => {
  const query =
    gql`
    query MyQuery3 {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessById = async (id) => {
  const query =
    gql`
    query GetBusinessById {
      businessList(where: { id: "` +
    id +
    `" }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const createNewBooking = async (
  businessId,
  date,
  time,
  userEmail,
  userName
) => {
  const mutationQuery =
    gql`
    mutation CreateBooking {
      createBooking(
        data: {
          bookingStatus: booked
          date: "` +
    date +
    `"
          time: "` +
    time +
    `"
          userEmail: "` +
    userEmail +
    `"
          userName: "` +
    userName +
    `"
          businessList: { connect: { BusinessList: { id: "` +
    businessId +
    `" } } }
        }
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
    count
  }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const businessBookedSlot = async (businessId, date) => {
  const query =
    gql`
    query BusinessBookedSlot {
      bookings(
        where: { businessList: { BusinessList: { id: "` +
    businessId +
    `" } }, date: "` +
    date +
    `" }
      ) {
        date
        time
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getUserBookingHistory = async (userEmail) => {
  const query = gql`
    query getUserBookingHistory {
  bookings(where: {userEmail: "`+userEmail+`"}) {
    businessList {
      ... on BusinessList {
        contactPerson
        address
        name
        images {
          url
        }
      }
    }
    date
    time
  }
}
  `;

  const result = await request(MASTER_URL,query);
  return result;
}

export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  businessBookedSlot,
  getUserBookingHistory
};
