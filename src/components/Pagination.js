import { useContext } from 'react'
import { DataContext } from '../context/dataContext';

const Paginacion = () => {

  const { currentPage, setCurrentPage } = useContext(DataContext)

  const home = () => {
    setCurrentPage(0)
    window.localStorage.setItem("currentPage", 0)
  }

  const nextPage = () => {
    setCurrentPage(Number(currentPage) + 10)
    window.localStorage.setItem("currentPage", Number(currentPage) + 10)
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(Number(currentPage) - 10)
      window.localStorage.setItem("currentPage", Number(currentPage) - 10)
    }
  }

  return (
    <div className='d-flex justify-content-between'>
      <button
        className='btn btn-secondary'
        onClick={prevPage}
      >
        <i class="bi-caret-left"></i>
      </button>
      <button
        className='btn btn-secondary ms-3'
        onClick={home}
      >
        <i class="bi-house"></i>
      </button>
      <button
        className='btn btn-secondary ms-3'
        onClick={nextPage}
      >
        <i class="bi-caret-right"></i>
      </button>
    </div>
  )
}

export default Paginacion
