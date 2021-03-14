import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const Page: FC = () => {
    useTranslation('locale');

    return (
        <>
            <Trans i18nKey="locale:page" />
        </>
    );
};

export default Page;
