db.sightings.aggregate([
  {
    $match: {
      date: {
        $gt: ISODate("2022-01-01-01T00:00:00.OZ"),
        $lt: ISODate("2023-01-01-01T00:00:00.OZ"),
      },
    },
  },
  {
    $out: "sightings_2022",
  },
]);
