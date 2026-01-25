import Skeleton from "./Skeleton"

const AuthSkeleton = () => {
  return (
    <div style={{ padding: "40px", maxWidth: 400, margin: "auto" }}>
      <Skeleton width="60%" height="28px" />
      <div style={{ marginTop: 20 }}>
        <Skeleton height="14px" />
        <Skeleton height="14px" style={{ marginTop: 10 }} />
        <Skeleton height="14px" style={{ marginTop: 10 }} />
      </div>

      <div style={{ marginTop: 30 }}>
        <Skeleton height="40px" radius="10px" />
      </div>
    </div>
  )
}

export default AuthSkeleton
