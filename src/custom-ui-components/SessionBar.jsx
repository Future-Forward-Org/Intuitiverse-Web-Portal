import React, { useState } from 'react';
import { Flex } from '@aws-amplify/ui-react';
import { Pagination, Skeleton } from '@mui/material';
import { SessionCard } from '../ui-components';

export default function SessionBar(props) {
    const { sessions } = props;

    function convertToReadableDate(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const readableDate = dateTime.toLocaleString(undefined, options);
        return readableDate;
    }
    function convertToReadableTime(dateTimeString) {
        let dateTime = new Date(dateTimeString);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        };
        let readableTime = dateTime.toLocaleTimeString(undefined, options);
        return readableTime;
    }

    const ITEMS_PER_PAGE = 3; // Number of items to display per page

    const [currentPage, setCurrentPage] = useState(1);
    const currentSessions = sessions; // Replace with your actual session data array

    const handleSessionOpen = () => setShowSessionForm(true);
    const handleSessionClose = () => setShowSessionForm(false);
    const [showSessionForm, setShowSessionForm] = useState(false);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentSessionSlice = currentSessions.slice(startIndex, endIndex);

    return (
        <div>
            {currentSessions == null || currentSessions.length === 0 ? (
                <Flex direction="row" margin="8px 8px 32px 32px">
                    <Skeleton variant="box" width={150} height={150} />
                    <Skeleton variant="box" width={150} height={150} />
                    <Skeleton variant="box" width={150} height={150} />
                </Flex>
            ) : (
                <div>
                    <Flex direction="row" margin="8px 8px 0px 32px">
                        {currentSessionSlice.map((session) => (
                            <SessionCard
                                key={session.id}
                                session={session}
                                sessionButton={handleSessionOpen}
                                sessionDate={convertToReadableDate(session.startDateTime)}
                                sessionTime={
                                    convertToReadableTime(session.endDateTime) +
                                    ' - ' +
                                    convertToReadableTime(session.endDateTime)
                                }
                            />
                        ))}
                    </Flex>
                    <div>
                        <Pagination
                            count={Math.ceil(currentSessions.length / ITEMS_PER_PAGE)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                            size="large"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
