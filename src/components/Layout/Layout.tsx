import { ComponentPropsWithoutRef } from 'react'

import PageWrapper from '@/components/PageWrapper/PageWrapper'

interface Props extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode
}

const Layout = ({
  children,
  ...rest
}: Props) => {
  return (
    <div
      className="min-h-screen pt-8 pb-16 tablet:pb-32 bg-repeat bg-center bg-cover screen px-4"
      {...rest}
    >
      <PageWrapper>
        {children}
      </PageWrapper>
    </div>
  )
}

export default Layout
