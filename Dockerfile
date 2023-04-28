FROM public.ecr.aws/docker/library/node:14.17.3 as production

ARG USERID=1001
ARG GROUPID=1001

RUN addgroup --system --gid $GROUPID nodeuser
RUN adduser --system --uid $USERID --gid $GROUPID nodeuser

#EXPOSE 8000
#WORKDIR /app
ADD package*.json ./


COPY . ./
RUN yarn install
RUN CI=false yarn run build

# Enabled in package.json
# RUN CI=false yarn run overrider


CMD ["node", "index.js"]
ADD . .