import { Button, Stack, Box, Text } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: ( page: number) => void;
}

const siblingCount = 1;

function generatePagesArray( from: number, to: number) {
    return [...new Array(to - from)].map( (_, index) => (
        from + index + 1
    ))
    .filter(page => page > 0 )
}

export function Pagination({
    totalCountOfRegisters,
    registersPerPage=10,
    currentPage=1,
    onPageChange
 }: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters/registersPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1 )
        : [];

    const nextPages = currentPage < lastPage 
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingCount, lastPage))
        : []

    return(
        <Stack
            direction={["column","row"]}
            spacing="6"
            mt="8"
            justify="space-between"
        >
            <Box>
                <strong>0</strong> - <strong> 10 </strong> de <strong>100</strong>
            </Box>
            <Stack
                direction="row"
                spacing="2"
                >

                    { currentPage > (1 + siblingCount) && ( 
                        <>
                            <PaginationItem onPageChange={onPageChange} number={1}/>
                            
                            { currentPage > (2 + siblingCount) && <Text color="gray.300" w="8" textAlign="center">...</Text>}
                        </>
                    )}

                    { previousPages.length > 0 && previousPages.map( page => (
                        <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
                    ))}

                   <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
                    
                   { nextPages.length > 0 && nextPages.map( page => (
                        <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
                    ))}

                    { (currentPage + siblingCount) < lastPage && ( 
                        <>
                            { (currentPage + 1 + siblingCount) < lastPage && <Text color="gray.300" w="8" textAlign="center">...</Text>}
                            
                            <PaginationItem onPageChange={onPageChange} number={lastPage}/>
                                            
                        </>
                    
                    )}

            </Stack>
        </Stack>
    );
}