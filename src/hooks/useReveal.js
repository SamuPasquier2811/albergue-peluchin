import { useEffect } from 'react'

export default function useRevealAll() {
    useEffect(() => {
        const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('is-in')
                io.unobserve(e.target)
            }
            })
        },
        { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
        )
        document.querySelectorAll('.rv').forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])
}