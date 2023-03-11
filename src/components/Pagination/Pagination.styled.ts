import styled from 'styled-components'
export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    height: 36px;
    cursor: pointer;
    user-select: none;
    color: #333333;
    font-size: 14px;
    line-height: 20px;
    svg {
      color: #cacaca;
      width: 20px;
      height: 20px;
    }
    li {
      border: 1px solid #e1e1e1;
      &:first-child {
      }
      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      transition: border-color 250ms;

      :hover {
        border: 1px solid #2bb54b;
        &:last-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        &:first-child {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        svg {
          transition: color 300ms;
          color: #2bb54b;
        }
      }
      &.active {
        background: #2bb54b;
        color: #ffffff;
        border: 1px solid #2bb54b;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        width: 44px;
      }
    }
  }
`

/* .pagination {
    margin: 40px auto;
    display: flex;
    list-style: none;
    outline: none;
    user-select: none;
  }

  .pagination > .active > a {
    color: #ffffff;
    border: #2bb54b;
  }
  .pagination > li > a {
    border-radius: 6px;
    padding: 9px 13px;
    margin: 3px;
    outline: none;
    cursor: pointer;
    border: 1px solid #2bb54b;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: #2bb54b;
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #2bb54b;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }

  .pagination > li.previous > a,
  .pagination > li.next > a {
    border: none;
  }
` */
