const ticketsData = [
    {
      "id": 25,
      "id_airport": 18,
      "departure_date": "2023-03-12T06:27:33.713Z",
      "arrival_date": "2023-07-14T06:27:33.713Z",
      "class": "Business",
      "price": 2670000,
      "createdAt": "2022-12-30T06:58:23.219Z",
      "updatedAt": "2022-12-30T06:58:23.219Z",
      "airport": {
        "id": 18,
        "airport_name": "Raja Haji Fisabilillah International Airport",
        "airport_location": "Tanjung Pinang, Riau, Indonesia",
        "createdAt": "2022-12-29T13:04:29.586Z",
        "updatedAt": "2022-12-29T13:04:29.586Z"
      }
    },
    {
      "id": 24,
      "id_airport": 20,
      "departure_date": "2023-08-12T06:27:33.713Z",
      "arrival_date": "2023-09-14T06:27:33.713Z",
      "class": "Business",
      "price": 3890000,
      "createdAt": "2022-12-30T06:57:45.469Z",
      "updatedAt": "2022-12-30T06:57:45.469Z",
      "airport": {
        "id": 20,
        "airport_name": "Radin Inten II International Airport",
        "airport_location": "Bandar Lampung, Lampung, Indonesia",
        "createdAt": "2022-12-29T13:04:55.242Z",
        "updatedAt": "2022-12-29T13:04:55.242Z"
      }
    },
    {
      "id": 23,
      "id_airport": 24,
      "departure_date": "2023-05-12T06:27:33.713Z",
      "arrival_date": "2023-07-14T06:27:33.713Z",
      "class": "Business",
      "price": 2890000,
      "createdAt": "2022-12-30T06:57:15.033Z",
      "updatedAt": "2022-12-30T06:57:15.033Z",
      "airport": {
        "id": 24,
        "airport_name": "Halim Perdana Kusuma International Airport",
        "airport_location": "Jakarta Utara, DKI Jakarta, Indonesia",
        "createdAt": "2022-12-30T06:27:33.713Z",
        "updatedAt": "2022-12-30T06:27:33.713Z"
      }
    },
    {
      "id": 22,
      "id_airport": 14,
      "departure_date": "2023-04-12T06:27:33.713Z",
      "arrival_date": "2023-04-14T06:27:33.713Z",
      "class": "Economy",
      "price": 1890000,
      "createdAt": "2022-12-30T06:56:30.662Z",
      "updatedAt": "2022-12-30T06:56:30.662Z",
      "airport": {
        "id": 14,
        "airport_name": "Minangkabau International Airport",
        "airport_location": "Padang, Sumatera Barat, Indonesia",
        "createdAt": "2022-12-29T13:03:41.328Z",
        "updatedAt": "2022-12-29T13:03:41.328Z"
      }
    },
    {
      "id": 21,
      "id_airport": 17,
      "departure_date": "2023-05-22T06:27:33.713Z",
      "arrival_date": "2023-06-09T06:27:33.713Z",
      "class": "Economy",
      "price": 1620000,
      "createdAt": "2022-12-30T06:56:00.393Z",
      "updatedAt": "2022-12-30T06:56:00.393Z",
      "airport": {
        "id": 17,
        "airport_name": "Sultan Mahmud Badaruddin II International Airport",
        "airport_location": "Palembang, Sumatera Selatan, Indonesia",
        "createdAt": "2022-12-29T13:04:14.722Z",
        "updatedAt": "2022-12-29T13:04:14.722Z"
      }
    },
    {
      "id": 20,
      "id_airport": 8,
      "departure_date": "2023-01-22T06:27:33.713Z",
      "arrival_date": "2023-03-09T06:27:33.713Z",
      "class": "Economy",
      "price": 1920000,
      "createdAt": "2022-12-30T06:55:02.089Z",
      "updatedAt": "2022-12-30T06:55:02.089Z",
      "airport": {
        "id": 8,
        "airport_name": "Abdul Rachman Saleh International Airport",
        "airport_location": "Malang, Jawa Timur, Indonesia",
        "createdAt": "2022-12-29T13:02:35.800Z",
        "updatedAt": "2022-12-29T13:02:35.800Z"
      }
    },
    {
      "id": 19,
      "id_airport": 9,
      "departure_date": "2023-02-11T06:27:33.713Z",
      "arrival_date": "2023-04-05T06:27:33.713Z",
      "class": "Business",
      "price": 2590000,
      "createdAt": "2022-12-30T06:54:08.071Z",
      "updatedAt": "2022-12-30T06:54:08.071Z",
      "airport": {
        "id": 9,
        "airport_name": "Blimbingsari International Airport",
        "airport_location": "Banyuwangi, Jawa Timur, Indonesia",
        "createdAt": "2022-12-29T13:02:50.704Z",
        "updatedAt": "2022-12-29T13:02:50.704Z"
      }
    },
    {
      "id": 18,
      "id_airport": 33,
      "departure_date": "2023-03-12T06:27:33.713Z",
      "arrival_date": "2023-04-20T06:27:33.713Z",
      "class": "Business",
      "price": 2390000,
      "createdAt": "2022-12-30T06:53:31.959Z",
      "updatedAt": "2022-12-30T06:53:31.959Z",
      "airport": {
        "id": 33,
        "airport_name": "Juwata International Airport",
        "airport_location": "Tarakan, Kalimantan Utara, Indonesia",
        "createdAt": "2022-12-30T06:42:41.081Z",
        "updatedAt": "2022-12-30T06:42:41.081Z"
      }
    },
    {
      "id": 17,
      "id_airport": 32,
      "departure_date": "2023-03-15T06:27:33.713Z",
      "arrival_date": "2023-04-20T06:27:33.713Z",
      "class": "Business",
      "price": 2050000,
      "createdAt": "2022-12-30T06:53:05.205Z",
      "updatedAt": "2022-12-30T06:53:05.205Z",
      "airport": {
        "id": 32,
        "airport_name": "Sentani International Airport",
        "airport_location": "Jayapura, Papua, Indonesia",
        "createdAt": "2022-12-30T06:42:06.240Z",
        "updatedAt": "2022-12-30T06:42:06.240Z"
      }
    },
    {
      "id": 16,
      "id_airport": 12,
      "departure_date": "2023-04-15T06:27:33.713Z",
      "arrival_date": "2023-04-20T06:27:33.713Z",
      "class": "Business",
      "price": 1050000,
      "createdAt": "2022-12-30T06:52:31.562Z",
      "updatedAt": "2022-12-30T06:52:31.562Z",
      "airport": {
        "id": 12,
        "airport_name": "Polonia International Airport",
        "airport_location": "Medan, Sumatera Utara, Indonesia",
        "createdAt": "2022-12-29T13:03:23.305Z",
        "updatedAt": "2022-12-29T13:03:23.305Z"
      }
    },
    {
      "id": 15,
      "id_airport": 22,
      "departure_date": "2023-04-11T06:27:33.713Z",
      "arrival_date": "2023-04-20T06:27:33.713Z",
      "class": "Economy",
      "price": 950000,
      "createdAt": "2022-12-30T06:51:43.961Z",
      "updatedAt": "2022-12-30T06:51:43.961Z",
      "airport": {
        "id": 22,
        "airport_name": "El Tari International Airport",
        "airport_location": "Kupang, Nusa Tenggara Timur, Indonesia",
        "createdAt": "2022-12-29T13:05:22.711Z",
        "updatedAt": "2022-12-29T13:05:22.711Z"
      }
    },
    {
      "id": 14,
      "id_airport": 25,
      "departure_date": "2023-01-15T06:27:33.713Z",
      "arrival_date": "2023-01-20T06:27:33.713Z",
      "class": "Economy",
      "price": 600000,
      "createdAt": "2022-12-30T06:51:09.751Z",
      "updatedAt": "2022-12-30T06:51:09.751Z",
      "airport": {
        "id": 25,
        "airport_name": "Supadio International Airport",
        "airport_location": "Pontianak, Kalimantan Barat, Indonesia",
        "createdAt": "2022-12-30T06:36:54.530Z",
        "updatedAt": "2022-12-30T06:36:54.530Z"
      }
    },
    {
      "id": 13,
      "id_airport": 17,
      "departure_date": "2023-02-27T06:27:33.713Z",
      "arrival_date": "2023-03-01T06:27:33.713Z",
      "class": "Economy",
      "price": 1000000,
      "createdAt": "2022-12-30T06:49:54.811Z",
      "updatedAt": "2022-12-30T06:49:54.811Z",
      "airport": {
        "id": 17,
        "airport_name": "Sultan Mahmud Badaruddin II International Airport",
        "airport_location": "Palembang, Sumatera Selatan, Indonesia",
        "createdAt": "2022-12-29T13:04:14.722Z",
        "updatedAt": "2022-12-29T13:04:14.722Z"
      }
    },
    {
      "id": 12,
      "id_airport": 26,
      "departure_date": "2023-03-01T06:27:33.713Z",
      "arrival_date": "2023-03-11T06:27:33.713Z",
      "class": "Economy",
      "price": 1600000,
      "createdAt": "2022-12-30T06:48:58.883Z",
      "updatedAt": "2022-12-30T06:48:58.883Z",
      "airport": {
        "id": 26,
        "airport_name": "Syamsudin Noor International Airport",
        "airport_location": "Banjarbaru, Kalimantan Selatan, Indonesia",
        "createdAt": "2022-12-30T06:37:37.174Z",
        "updatedAt": "2022-12-30T06:37:37.174Z"
      }
    },
    {
      "id": 11,
      "id_airport": 30,
      "departure_date": "2023-03-02T06:27:33.713Z",
      "arrival_date": "2023-03-10T06:27:33.713Z",
      "class": "Business",
      "price": 2800000,
      "createdAt": "2022-12-30T06:46:19.515Z",
      "updatedAt": "2022-12-30T06:46:19.515Z",
      "airport": {
        "id": 30,
        "airport_name": "Pattimura International Airport",
        "airport_location": "Ambon, Maluku, Indonesia",
        "createdAt": "2022-12-30T06:40:47.228Z",
        "updatedAt": "2022-12-30T06:40:47.228Z"
      }
    },
    {
      "id": 10,
      "id_airport": 11,
      "departure_date": "2023-01-25T06:27:33.713Z",
      "arrival_date": "2023-02-04T06:27:33.713Z",
      "class": "Business",
      "price": 2700000,
      "createdAt": "2022-12-30T06:34:35.899Z",
      "updatedAt": "2022-12-30T06:34:35.899Z",
      "airport": {
        "id": 11,
        "airport_name": "Sultan Iskandar Muda International Airport",
        "airport_location": "Banda Aceh, NAD, Indonesia",
        "createdAt": "2022-12-29T13:03:12.906Z",
        "updatedAt": "2022-12-29T13:03:12.906Z"
      }
    },
    {
      "id": 9,
      "id_airport": 18,
      "departure_date": "2023-01-28T06:27:33.713Z",
      "arrival_date": "2023-02-07T06:27:33.713Z",
      "class": "Business",
      "price": 1968000,
      "createdAt": "2022-12-30T06:34:01.394Z",
      "updatedAt": "2022-12-30T06:34:01.394Z",
      "airport": {
        "id": 18,
        "airport_name": "Raja Haji Fisabilillah International Airport",
        "airport_location": "Tanjung Pinang, Riau, Indonesia",
        "createdAt": "2022-12-29T13:04:29.586Z",
        "updatedAt": "2022-12-29T13:04:29.586Z"
      }
    },
    {
      "id": 8,
      "id_airport": 21,
      "departure_date": "2023-02-04T06:27:33.713Z",
      "arrival_date": "2023-02-10T06:27:33.713Z",
      "class": "Economy",
      "price": 1300000,
      "createdAt": "2022-12-30T06:33:12.472Z",
      "updatedAt": "2022-12-30T06:33:12.472Z",
      "airport": {
        "id": 21,
        "airport_name": "Lombok International Airport",
        "airport_location": "Lombok, Nusa Tenggara Barat, Indonesia",
        "createdAt": "2022-12-29T13:05:08.896Z",
        "updatedAt": "2022-12-29T13:05:08.896Z"
      }
    },
    {
      "id": 7,
      "id_airport": 24,
      "departure_date": "2023-01-04T06:27:33.713Z",
      "arrival_date": "2023-01-10T06:27:33.713Z",
      "class": "Economy",
      "price": 1300000,
      "createdAt": "2022-12-30T06:32:11.648Z",
      "updatedAt": "2022-12-30T06:32:11.648Z",
      "airport": {
        "id": 24,
        "airport_name": "Halim Perdana Kusuma International Airport",
        "airport_location": "Jakarta Utara, DKI Jakarta, Indonesia",
        "createdAt": "2022-12-30T06:27:33.713Z",
        "updatedAt": "2022-12-30T06:27:33.713Z"
      }
    },
    {
      "id": 6,
      "id_airport": 10,
      "departure_date": "2022-12-31T06:27:33.713Z",
      "arrival_date": "2023-01-26T06:27:33.713Z",
      "class": "Business",
      "price": 1800000,
      "createdAt": "2022-12-30T06:30:43.037Z",
      "updatedAt": "2022-12-30T06:30:43.037Z",
      "airport": {
        "id": 10,
        "airport_name": "Hang Nadim International Airport",
        "airport_location": "Batam, Riau, Indonesia",
        "createdAt": "2022-12-29T13:03:01.501Z",
        "updatedAt": "2022-12-29T13:03:01.501Z"
      }
    },
    {
      "id": 5,
      "id_airport": 3,
      "departure_date": "2022-12-30T06:27:33.713Z",
      "arrival_date": "2023-01-06T06:27:33.713Z",
      "class": "Business",
      "price": 2900000,
      "createdAt": "2022-12-30T06:29:42.707Z",
      "updatedAt": "2022-12-30T06:29:42.707Z",
      "airport": {
        "id": 3,
        "airport_name": "Juanda International Airport",
        "airport_location": "Sidoarjo, Jawa Timur, Indonesia",
        "createdAt": "2022-12-29T13:00:17.888Z",
        "updatedAt": "2022-12-29T13:00:17.888Z"
      }
    },
    {
      "id": 4,
      "id_airport": 3,
      "departure_date": "2022-12-30T00:00:00.000Z",
      "arrival_date": "2022-12-31T00:00:00.000Z",
      "class": "Economy",
      "price": 650000,
      "createdAt": "2022-12-29T18:13:30.484Z",
      "updatedAt": "2022-12-29T18:13:30.484Z",
      "airport": {
        "id": 3,
        "airport_name": "Juanda International Airport",
        "airport_location": "Sidoarjo, Jawa Timur, Indonesia",
        "createdAt": "2022-12-29T13:00:17.888Z",
        "updatedAt": "2022-12-29T13:00:17.888Z"
      }
    },
    {
      "id": 3,
      "id_airport": 1,
      "departure_date": "2022-12-29T00:00:00.000Z",
      "arrival_date": "2022-12-30T00:00:00.000Z",
      "class": "Economy",
      "price": 1500000,
      "createdAt": "2022-12-29T10:32:18.760Z",
      "updatedAt": "2022-12-30T03:54:40.113Z",
      "airport": {
        "id": 1,
        "airport_name": "Soekarno Hatta International Airport",
        "airport_location": "Jakarta, Indonesia",
        "createdAt": "2022-12-29T05:27:40.041Z",
        "updatedAt": "2022-12-29T05:27:40.041Z"
      }
    }
  ]
  module.exports=ticketsData