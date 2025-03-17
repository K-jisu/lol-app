"use client";

import { PuffLoader } from "react-spinners";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default function Loading() {
  return (
    <div style={styles.container}>
      <PuffLoader color="#36d7b7" size={60} />
    </div>
  );
}
