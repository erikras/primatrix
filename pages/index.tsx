import React from 'react'
import Head from 'next/head'
import { calculateRow } from '../util/calculate'
import styled from 'styled-components'

const columns = 20
const size = 50
const range = new Array(20).fill(true)

const IndexPage = () => {
  const [rows, setRows] = React.useState<boolean[][]>([])
  React.useEffect(() => {
    const interval = setInterval(() => {
      setRows((rows) => [...rows, calculateRow(rows.length + 1, 30, columns)])
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Primes + Multiples of 30" />
        <meta property="og:url" content="https://primatrix.now.sh" />
        <meta
          property="og:description"
          content="A surprising number of early prime numbers are still prime if you add 30 or 60 to them."
        />
        <meta property="og:image" content="https://primatrix.now.sh/og.jpg" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Primes + Multiples of 30" />
        <meta property="twitter:url" content="https://primatrix.now.sh" />
        <meta
          property="twitter:description"
          content="A surprising number of early prime numbers are still prime if you add 30 or 60 to them."
        />
        <meta
          property="twitter:image"
          content="https://primatrix.now.sh/og.jpg"
        />
      </Head>
      <h1>
        Is <code>x + (30 * n)</code> prime?
      </h1>
      <Rows>
        <Row>
          {range.map((_n, index) => (
            <Header key={index}>{index + 1}</Header>
          ))}
        </Row>
        {rows.map((row, index) => (
          <Row key={index}>
            {row.map((value, rowIndex) => (
              <Box
                key={rowIndex}
                on={value}
                title={`${index + 1} + (30 * ${rowIndex + 1}) = ${
                  index + 1 + 30 * (rowIndex + 1)
                }`}
              />
            ))}
          </Row>
        ))}
      </Rows>
    </div>
  )
}

const Rows = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Header = styled.div`
  width: ${size}px;
  flex: 1;
  text-align: center;
`

const Box = styled.div<{ on?: boolean }>`
  flex:1;
  /* height: ${size / 2}px; */
  height: 5px;
  text-align: center;
  background-color: ${({ on }) =>
    on === undefined ? '#fff' : on ? '#f33' : '#ccc'};
`

export default IndexPage
