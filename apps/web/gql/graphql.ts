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
  location: Scalars['String']['input'];
  size: Scalars['String']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type CreateParcelpostInput = {
  customerReceiverDate?: InputMaybe<Scalars['DateTime']['input']>;
  lockerId?: InputMaybe<Scalars['Int']['input']>;
  nitiReceiverDate?: InputMaybe<Scalars['DateTime']['input']>;
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
  location: Scalars['String']['output'];
  size: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLocker: Locker;
  createMasterLocker: Array<Locker>;
  createParcelpost: Parcelpost;
  customerReceiver: Parcelpost;
  nitiReceiver: Parcelpost;
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


export type MutationCustomerReceiverArgs = {
  code: Scalars['String']['input'];
};


export type MutationNitiReceiverArgs = {
  parcelCode: Scalars['String']['input'];
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
  customerReceiverDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  locker?: Maybe<Locker>;
  lockerId?: Maybe<Scalars['Int']['output']>;
  nitiReceiverDate?: Maybe<Scalars['DateTime']['output']>;
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
  parcelpostByCode: Parcelpost;
  parcelposts: Array<Parcelpost>;
};


export type QueryLockerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryParcelpostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryParcelpostByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryParcelpostsArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
  unitCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLockerInput = {
  building?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Int']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateParcelpostInput = {
  code: Scalars['String']['input'];
  customerReceiverDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  lockerId?: InputMaybe<Scalars['Int']['input']>;
  nitiReceiverDate?: InputMaybe<Scalars['DateTime']['input']>;
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

export type ParcelpostFragment = { __typename?: 'Parcelpost', id: string, code: string, parcelCode?: string | null, senderName?: string | null, receiverName?: string | null, unitCode?: string | null, status: string, lockerId?: number | null, createdAt: any, updatedAt: any, locker?: { __typename?: 'Locker', id: number, code: string, building: string, size: string, location: string } | null };

export type ParcelpostsQueryVariables = Exact<{
  status?: InputMaybe<Scalars['String']['input']>;
  unitCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type ParcelpostsQuery = { __typename?: 'Query', parcelposts: Array<{ __typename?: 'Parcelpost', id: string, code: string, parcelCode?: string | null, senderName?: string | null, receiverName?: string | null, unitCode?: string | null, status: string, lockerId?: number | null, createdAt: any, updatedAt: any, locker?: { __typename?: 'Locker', id: number, code: string, building: string, size: string, location: string } | null }> };

export type CreateParcelpostMutationVariables = Exact<{
  createParcelpostInput: CreateParcelpostInput;
}>;


export type CreateParcelpostMutation = { __typename?: 'Mutation', createParcelpost: { __typename?: 'Parcelpost', id: string, code: string, parcelCode?: string | null, senderName?: string | null, receiverName?: string | null, unitCode?: string | null, status: string, lockerId?: number | null, createdAt: any, updatedAt: any, locker?: { __typename?: 'Locker', id: number, code: string, building: string, size: string, location: string } | null } };

export type ParcelpostByCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type ParcelpostByCodeQuery = { __typename?: 'Query', parcelpostByCode: { __typename?: 'Parcelpost', id: string, code: string, parcelCode?: string | null, senderName?: string | null, receiverName?: string | null, unitCode?: string | null, status: string, lockerId?: number | null, createdAt: any, updatedAt: any, locker?: { __typename?: 'Locker', id: number, code: string, building: string, size: string, location: string } | null } };

export type CustomerReceiverMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type CustomerReceiverMutation = { __typename?: 'Mutation', customerReceiver: { __typename?: 'Parcelpost', id: string, code: string, parcelCode?: string | null, senderName?: string | null, receiverName?: string | null, unitCode?: string | null, status: string, lockerId?: number | null, createdAt: any, updatedAt: any, locker?: { __typename?: 'Locker', id: number, code: string, building: string, size: string, location: string } | null } };

export const ParcelpostFragmentDoc = gql`
    fragment Parcelpost on Parcelpost {
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
  locker {
    id
    code
    building
    size
    location
  }
}
    `;
export const ParcelpostsDocument = gql`
    query Parcelposts($status: String, $unitCode: String) {
  parcelposts(status: $status, unitCode: $unitCode) {
    ...Parcelpost
  }
}
    ${ParcelpostFragmentDoc}`;

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
 *      status: // value for 'status'
 *      unitCode: // value for 'unitCode'
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
export const CreateParcelpostDocument = gql`
    mutation CreateParcelpost($createParcelpostInput: CreateParcelpostInput!) {
  createParcelpost(createParcelpostInput: $createParcelpostInput) {
    ...Parcelpost
  }
}
    ${ParcelpostFragmentDoc}`;
export type CreateParcelpostMutationFn = Apollo.MutationFunction<CreateParcelpostMutation, CreateParcelpostMutationVariables>;

/**
 * __useCreateParcelpostMutation__
 *
 * To run a mutation, you first call `useCreateParcelpostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateParcelpostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createParcelpostMutation, { data, loading, error }] = useCreateParcelpostMutation({
 *   variables: {
 *      createParcelpostInput: // value for 'createParcelpostInput'
 *   },
 * });
 */
export function useCreateParcelpostMutation(baseOptions?: Apollo.MutationHookOptions<CreateParcelpostMutation, CreateParcelpostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateParcelpostMutation, CreateParcelpostMutationVariables>(CreateParcelpostDocument, options);
      }
export type CreateParcelpostMutationHookResult = ReturnType<typeof useCreateParcelpostMutation>;
export type CreateParcelpostMutationResult = Apollo.MutationResult<CreateParcelpostMutation>;
export type CreateParcelpostMutationOptions = Apollo.BaseMutationOptions<CreateParcelpostMutation, CreateParcelpostMutationVariables>;
export const ParcelpostByCodeDocument = gql`
    query ParcelpostByCode($code: String!) {
  parcelpostByCode(code: $code) {
    ...Parcelpost
  }
}
    ${ParcelpostFragmentDoc}`;

/**
 * __useParcelpostByCodeQuery__
 *
 * To run a query within a React component, call `useParcelpostByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useParcelpostByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParcelpostByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useParcelpostByCodeQuery(baseOptions: Apollo.QueryHookOptions<ParcelpostByCodeQuery, ParcelpostByCodeQueryVariables> & ({ variables: ParcelpostByCodeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParcelpostByCodeQuery, ParcelpostByCodeQueryVariables>(ParcelpostByCodeDocument, options);
      }
export function useParcelpostByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParcelpostByCodeQuery, ParcelpostByCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParcelpostByCodeQuery, ParcelpostByCodeQueryVariables>(ParcelpostByCodeDocument, options);
        }
export function useParcelpostByCodeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ParcelpostByCodeQuery, ParcelpostByCodeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ParcelpostByCodeQuery, ParcelpostByCodeQueryVariables>(ParcelpostByCodeDocument, options);
        }
export type ParcelpostByCodeQueryHookResult = ReturnType<typeof useParcelpostByCodeQuery>;
export type ParcelpostByCodeLazyQueryHookResult = ReturnType<typeof useParcelpostByCodeLazyQuery>;
export type ParcelpostByCodeSuspenseQueryHookResult = ReturnType<typeof useParcelpostByCodeSuspenseQuery>;
export type ParcelpostByCodeQueryResult = Apollo.QueryResult<ParcelpostByCodeQuery, ParcelpostByCodeQueryVariables>;
export const CustomerReceiverDocument = gql`
    mutation CustomerReceiver($code: String!) {
  customerReceiver(code: $code) {
    ...Parcelpost
  }
}
    ${ParcelpostFragmentDoc}`;
export type CustomerReceiverMutationFn = Apollo.MutationFunction<CustomerReceiverMutation, CustomerReceiverMutationVariables>;

/**
 * __useCustomerReceiverMutation__
 *
 * To run a mutation, you first call `useCustomerReceiverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerReceiverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerReceiverMutation, { data, loading, error }] = useCustomerReceiverMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCustomerReceiverMutation(baseOptions?: Apollo.MutationHookOptions<CustomerReceiverMutation, CustomerReceiverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CustomerReceiverMutation, CustomerReceiverMutationVariables>(CustomerReceiverDocument, options);
      }
export type CustomerReceiverMutationHookResult = ReturnType<typeof useCustomerReceiverMutation>;
export type CustomerReceiverMutationResult = Apollo.MutationResult<CustomerReceiverMutation>;
export type CustomerReceiverMutationOptions = Apollo.BaseMutationOptions<CustomerReceiverMutation, CustomerReceiverMutationVariables>;