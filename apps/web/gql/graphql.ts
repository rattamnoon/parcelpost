import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateLockerInput = {
  building: Scalars['String']['input'];
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type CreateParcelpostInput = {
  lockerId?: InputMaybe<Scalars['Int']['input']>;
  /** รหัสพัสดุ */
  parcelCode?: InputMaybe<Scalars['String']['input']>;
  /** ชื่อผู้รับ */
  receiverName?: InputMaybe<Scalars['String']['input']>;
  /** ชื่อผู้ส่ง */
  senderName?: InputMaybe<Scalars['String']['input']>;
  /** สถานะพัสดุ */
  status: Scalars['String']['input'];
  /** ห้อง */
  unitCode?: InputMaybe<Scalars['String']['input']>;
};

export type Locker = {
  __typename?: 'Locker';
  building: Scalars['String']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLocker: Locker;
  createMasterLocker: Array<Locker>;
  createParcelpost: Parcelpost;
  removeLocker: Locker;
  removeParcelpost: Parcelpost;
  updateLocker: Locker;
  updateParcelpost: Parcelpost;
};


export type MutationCreateLockerArgs = {
  createLockerInput: CreateLockerInput;
};


export type MutationCreateParcelpostArgs = {
  createParcelpostInput: CreateParcelpostInput;
};


export type MutationRemoveLockerArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveParcelpostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateLockerArgs = {
  updateLockerInput: UpdateLockerInput;
};


export type MutationUpdateParcelpostArgs = {
  updateParcelpostInput: UpdateParcelpostInput;
};

export type Parcelpost = {
  __typename?: 'Parcelpost';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lockerId?: Maybe<Scalars['Int']['output']>;
  /** รหัสพัสดุ */
  parcelCode?: Maybe<Scalars['String']['output']>;
  /** ชื่อผู้รับ */
  receiverName?: Maybe<Scalars['String']['output']>;
  /** ชื่อผู้ส่ง */
  senderName?: Maybe<Scalars['String']['output']>;
  /** สถานะพัสดุ */
  status: Scalars['String']['output'];
  /** ห้อง */
  unitCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  locker: Locker;
  lockers: Array<Locker>;
  parcelpost: Parcelpost;
  parcelposts: Array<Parcelpost>;
};


export type QueryLockerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryParcelpostArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateLockerInput = {
  building?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateParcelpostInput = {
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  lockerId?: InputMaybe<Scalars['Int']['input']>;
  /** รหัสพัสดุ */
  parcelCode?: InputMaybe<Scalars['String']['input']>;
  /** ชื่อผู้รับ */
  receiverName?: InputMaybe<Scalars['String']['input']>;
  /** ชื่อผู้ส่ง */
  senderName?: InputMaybe<Scalars['String']['input']>;
  /** สถานะพัสดุ */
  status: Scalars['String']['input'];
  /** ห้อง */
  unitCode?: InputMaybe<Scalars['String']['input']>;
};

export type ParcelpostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ParcelpostsQuery = { __typename?: 'Query', parcelposts: Array<{ __typename?: 'Parcelpost', id: string, code: string, parcelCode?: string | null, senderName?: string | null, receiverName?: string | null, unitCode?: string | null, status: string, lockerId?: number | null, createdAt: any, updatedAt: any }> };


export const ParcelpostsDocument = gql`
    query Parcelposts {
  parcelposts {
    id
    code
    parcelCode
    senderName
    receiverName
    unitCode
    status
    lockerId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useParcelpostsQuery__
 *
 * To run a query within a React component, call `useParcelpostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParcelpostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParcelpostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useParcelpostsQuery(baseOptions?: Apollo.QueryHookOptions<ParcelpostsQuery, ParcelpostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParcelpostsQuery, ParcelpostsQueryVariables>(ParcelpostsDocument, options);
      }
export function useParcelpostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParcelpostsQuery, ParcelpostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParcelpostsQuery, ParcelpostsQueryVariables>(ParcelpostsDocument, options);
        }
export function useParcelpostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ParcelpostsQuery, ParcelpostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ParcelpostsQuery, ParcelpostsQueryVariables>(ParcelpostsDocument, options);
        }
export type ParcelpostsQueryHookResult = ReturnType<typeof useParcelpostsQuery>;
export type ParcelpostsLazyQueryHookResult = ReturnType<typeof useParcelpostsLazyQuery>;
export type ParcelpostsSuspenseQueryHookResult = ReturnType<typeof useParcelpostsSuspenseQuery>;
export type ParcelpostsQueryResult = Apollo.QueryResult<ParcelpostsQuery, ParcelpostsQueryVariables>;