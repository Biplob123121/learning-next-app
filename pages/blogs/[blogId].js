import { useRouter } from "next/router"

export default function blogId() {
    const router = useRouter();
    const id = router.query.blogId;
  return (
    <div>
        <h3>The blog id is : {id}</h3>
    </div>
  )
}
