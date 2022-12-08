/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link';
import { Button } from '@keystone-ui/button';
import { PageContainer } from '../../core/src/admin-ui/components';
import { jsx, Heading,Stack } from '@keystone-ui/core';
import { CheckboxControl, TextInput,Select } from '@keystone-ui/fields';
import { SearchIcon } from '@keystone-ui/icons/icons/SearchIcon';
// Please note that while this capability is driven by Next.js's pages directory
// We do not currently support any of the auxillary methods that Next.js provides i.e. `getStaticProps`
// Presently the only export from the directory that is supported is the page component itself.
import { getListPage } from '../../core/src/___internal-do-not-use-will-break-in-patch/admin-ui/pages/ListPage';

export default  function CustomPage() {
  var val={
    label:"Option a",
    value:"a"
  } 
  return (
  <PageContainer header={<Heading type="h3">Download items using filters</Heading>}>
    <h1
      css={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      This is a download page 
    </h1>
    <Stack across>
    <Select
          width="large"
          value={val}
          options={[
            {
              label: 'Option A',
              value: 'a',
            },
            {
              label: 'Option B',
              value: 'b',
            },
            {
              label: 'Option C',
              value: 'c',
            },
            {
              label: 'Option D',
              value: 'd',
            },
            {
              label: 'Option E',
              value: 'e',
            },
            {
              label: 'Option F',
              value: 'f',
            },
          ]}
           onChange={()=>{console.log("ok")}}
        />
      <TextInput
        css={{ borderRadius: '4px 0px 0px 4px' }}
        autoFocus
        value=""
        onChange={e => console.log(e.target.value)}
        placeholder={`Search by Pagename`}
      />
      <Button css={{ borderRadius: '0px 4px 4px 0px' }} type="submit">
        <SearchIcon />
      </Button>
    </Stack>

    <input type="text" placeholder='attributes'/>

    <Button>download</Button>
    <p
      css={{
        textAlign: 'center',
      }}
    >
      It can download data using filters
    </p>
  </PageContainer>
);
}
